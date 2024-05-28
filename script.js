const bOne = document.getElementById("cal1")
const bTwo = document.getElementById("cal2")
const bThree = document.getElementById("cal3")

//pages
const pageOne = document.querySelector(".subOne")
const pageTwo = document.querySelector(".subTwo")

//functionsss

function goPageOne(){
  pageOne.style.display = "contents";
  pageTwo.style.display = "none";
}

function goPageTwo(){
  pageOne.style.display = "none";
  pageTwo.style.display = "flex";

}