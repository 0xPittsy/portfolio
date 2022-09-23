// displays and hides project body on click of projTitle

const shopProj = document.getElementById("shop");
const shopBody = document.getElementById("shopImg");
shopProj.addEventListener("click", toggleShop);

shopBody.style.display = 'none';

function toggleShop() {
  if (shopBody.style.display === 'none'){
    shopBody.style.display = 'block';
} else shopBody.style.display = 'none';

// if (shopProj.style.listStyleType === "\u25B6"){
//     shopProj.style.listStyleType = "\u25B6";
// } else shopProj.style.listStyleType = "\u25BC";

//scrapped idea: arrow points down on expand, and reverts on collapse
}

const rockProj = document.getElementById("rock");
const rockBody = document.getElementById("rockImg")
rockProj.addEventListener("click", toggleRock);

rockBody.style.display = 'none';

function toggleRock() {
  if (rockBody.style.display === 'none'){
    rockBody.style.display = 'block';
} else rockBody.style.display = 'none';
}

const siteProj = document.getElementById("site");
const siteBody = document.getElementById("siteImg")
siteProj.addEventListener("click", toggleSite);

siteBody.style.display = 'none';

function toggleSite() {
  if (siteBody.style.display === 'none'){
    siteBody.style.display = 'block';
} else siteBody.style.display = 'none';
}