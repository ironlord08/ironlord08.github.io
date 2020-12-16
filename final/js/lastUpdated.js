let lastmod = document.lastModified;
let d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
document.getElementById("lastupdated").innerHTML = "Last Updated: " + lastmod;