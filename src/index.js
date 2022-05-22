import React from "react";
import { render } from "react-dom";
import Menu from "./components/Menu";
import draggable from "./components/draggable";
import data from "./data/recipes.json";
import './css/site.css';

render(<Menu recipes={data} />, document.getElementById("root"), () =>{
console.log('render done');
});

let draggables = document.getElementsByClassName("draggable");
console.log(`draggables ${draggables.length}`);
[].slice.call(draggables).map((d)=>draggable(d,[]));
console.log('draggable added');