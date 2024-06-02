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

const goMinorAlbum = document.querySelector("minor")
const goBackProj = document.querySelector("niggaGoBack")

const minorAlbum = document.querySelector(".minorAlbum")
const albumBtn = document.querySelector(".albumButtons")

function goMinor(){
  minorAlbum.style.display = "flex";
  albumBtn.style.display = "none";
}

function goBackProjPage(){
  minorAlbum.style.display = "none";
  //majorAlbum.style.display = "none";
  albumBtn.style.display = "flex";
}