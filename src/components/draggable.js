//https://javascript.info/mouse-drag-and-drop
export default function draggable(target, droppables) {
    target.onmousedown = function(event) {
        console.log('mouse down');
        let shiftX = event.clientX - target.getBoundingClientRect().left;
        let shiftY = event.clientY - target.getBoundingClientRect().top;
      
        target.style.position = 'absolute';
        target.style.zIndex = 1000;
        document.body.append(target);
      
        moveAt(event.pageX, event.pageY);
      
        // moves the target at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          target.style.left = pageX - shiftX + 'px';
          target.style.top = pageY - shiftY + 'px';
        }

        let currentDroppable = null;
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
          moveAt(event.pageX, event.pageY);
    
          target.hidden = true;
          let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
          target.hidden = false;
        
          // mousemove events may trigger out of the window (when the target is dragged off-screen)
          // if clientX/clientY are out of the window, then elementFromPoint returns null
          if (!elemBelow) return;
        
          // potential droppables are labeled with the class "droppable" (can be other logic)
          let droppableBelow = elemBelow.closest('.droppable');
        
          if (currentDroppable != droppableBelow) {
            // we're flying in or out...
            // note: both values can be null
            //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
            //   droppableBelow=null if we're not over a droppable now, during this event
        
            // if (currentDroppable) {
            //   // the logic to process "flying out" of the droppable (remove highlight)
            //   leaveDroppable(currentDroppable);
            // }
            // currentDroppable = droppableBelow;
            // if (currentDroppable) {
            //   // the logic to process "flying in" of the droppable
            //   enterDroppable(currentDroppable);
            // }
          } 
        }
      
        // move the target on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the target, remove unneeded handlers
        target.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          target.onmouseup = null;
        };
      
      };
      
      //disable browser drag support
      target.ondragstart = function() {
        return false;
      };
}