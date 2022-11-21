/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoR = Math.floor(Math.random() * 4);
  let actionR = Math.floor(Math.random() * 4);
  let whatR = Math.floor(Math.random() * 4);
  let whenR = Math.floor(Math.random() * 5);

  let respone =
    who[whoR.toString()] +
    " " +
    action[actionR.toString()] +
    " " +
    what[whatR.toString()] +
    " " +
    when[whenR.toString()];

  document.getElementById("excuse").innerHTML = respone;
};
