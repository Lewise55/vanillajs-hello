/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird",
  "The neighbor",
  "My doctor",
  "My kid",
  "A driver",
  "My goldfish"
];
let action = [
  "ate",
  "peed",
  "crushed",
  "broke",
  "changed",
  "lost",
  "flipped",
  "burned",
  "froze"
];
let what = [
  "my homework",
  "my phone",
  "the car",
  "my house",
  "my tires",
  "my hair",
  "my computer",
  "the road",
  "my keys"
];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
  "yesterday",
  "this morning",
  "after practice",
  "last night"
];

function getRandonNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandon(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandonNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandon(who) +
    " " +
    getRandon(action) +
    " " +
    getRandon(what) +
    " " +
    getRandon(when) +
    "!";
};
