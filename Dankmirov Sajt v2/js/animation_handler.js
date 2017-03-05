setInterval(traka, 0);
setInterval(paragraf, 250);
setInterval(navigation, 500);

function paragraf () {
     par = document.getElementById("smallTitle");

     par.innerHTML = "-Test small title-";
     par.setAttribute("class", "animated fadeInUp");
}

function navigation () {
     about = document.getElementById("abt");
     portfolio = document.getElementById("prt");
     contact = document.getElementById("ctc");
     nav = document.getElementById("navigation");

     about.innerHTML = "About";
     portfolio.innerHTML = "Portfolio";
     contact.innerHTML = "Contact";
     nav.setAttribute("class", "animated fadeInUp");
}

function traka () {
     trk = document.getElementById("title");

     trk.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
     trk.setAttribute("class", "animated fadeInUp");
     trk.style.marginLeft = "0";
}

function aboutDivs () {
     con1 = document.getElementById("container1");
     con2 = document.getElementById("container2");

     abtTitle = document.getElementById("aboutTitle");
     abtText = document.getElementById("aboutText");

     aTitle = document.getElementById("aboutTitleD");
     aText = document.getElementById("aboutTextD");

     con1.setAttribute("class", "animated fadeInLeft");
     con1.style.backgroundColor = "#48569E";
     con2.setAttribute("class", "animated fadeInRight");
     con2.style.backgroundColor = "#48569E";

     con2.innerHTML = '<img src="images/img.png">';

     abtTitle.innerHTML = "About";
     abtText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

     aTitle.setAttribute("class", "animated fadeIn");
     aTitle.style.backgroundColor = "rgba(0, 0, 0, 0.6)";

     aText.setAttribute("class", "animated fadeIn");
     aText.style.backgroundColor = "rgba(0, 0, 0, 0.6)";


}

var aboutPassed = false;
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 960 && aboutPassed == false) {
         aboutDivs();
         aboutPassed = true;
    }
});
