/* ======================
Variables
====================== */

const burgerButton = document.getElementById("button");
const colorMenu = document.getElementsByClassName("menu");
const colorMenuChildren = document.querySelectorAll(".menu *");
const btns = document.querySelectorAll("ul li input");
const body = document.getElementsByTagName("body");

let currentButton;
let lastEvent = "";
let arrayFromNodeList;

/* ==================
Helper-fucntions
================== */

const disableElement = function (element) {
  element.style.visibility = "hidden";
  element.style.display = "none";
};

const enableElement = function (element) {
  element.style.visibility = "visible";
  element.style.display = "block";
};

const changeOpacity = function (percent) {
  let percentage = (colorMenu[0].style.opacity = percent);
  return percentage;
};

/* ======================
Functions : Hamburger button
====================== */

const hamburgerButton = function () {
  burgerButton.addEventListener("click", function () {
    if (lastEvent == "100%") {
      lastEvent = changeOpacity("0%");
    } else {
      lastEvent = changeOpacity("100%");
      enableElement(colorMenu[0]);
    }
  });
};

hamburgerButton();

/* ==================
    Kleur menu
===================== */

const makeArrayFromNodeList = function (nodeList) {
  arrayFromNodeList = Array.from(nodeList);
  return arrayFromNodeList;
};

// A1le event-listeners en gevolgen worden geplaatst.
// Ik heb deze functies eerder opgesplitst, maar ik kon het niet werkend krijgen.
const doForEachElement = function (array) {
  array.forEach(function (button) {
    button.parentElement.addEventListener("click", function (event) {
      // Haalt de style van het element op.
      let currentStyle = window.getComputedStyle(button.parentElement)[
        "backgroundColor"
      ];
      body[0].style.backgroundColor = currentStyle; // De kleur van btn.parentElement wordt toegepast op de body achtergrond-kleur.
      if (event != undefined) {
        // If-else-statement ipv ':active' omdat de syntax voor problemen zorgde i.a.w. I suck at Syntax.
        /* if (button.parentElement.style.color == "grey") {
          button.parentElement.style.color = "black";
        } else {
          button.parentElement.style.color = "grey";
          console.log(array);
          if (array[button] != button) {
            array.parentElement.style.color = "black";
          }
        } */

        // Wanneer event binnenkomt, verberg en disable het kleur-menu.
        lastEvent = changeOpacity("0%");
        window.setTimeout(disableElement(colorMenu[0]), 350); // Vertraagt de uitvoering met 350ms
      }
    });
  });
};

/* ==================
 Alles Samengevoegd
=====================
 */

const colorToggle = function () {
  doForEachElement(makeArrayFromNodeList(btns));
};

colorToggle();
