
var accordianHeaders = document.querySelectorAll('#accordian .accordian-headers');
var accordianDescription = document.querySelectorAll('#accordian .accordian-description');

var myMainNavLinks = document.getElementsByClassName('main-menu-labels a');
var myDropDowns = document.querySelectorAll('.sub-menu li');

const hamburgerButton = document.getElementById('hamburger');
// const navMenu = document.querySelector('.main-menu');
const navMenu = document.querySelector('.main-menu');

var myMainNavLinks = document.getElementsByClassName('main-menu-labels');

function toggleSubMenu(){
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('hide');
}

for(i=0; i<myMainNavLinks.length; i++){
  //myMainNavLinks[i].addEventListener('click', toggleSubMenu);
  myMainNavLinks[i].addEventListener('mouseover', toggleSubMenu);
  //myMainNavLinks[i].addEventListener('mouseenter', toggleSubMenu);
  myMainNavLinks[i].addEventListener('mouseleave', toggleSubMenu);
}

function toggleMenu(){
  navMenu.classList.toggle('show-mobile-menu');
}

hamburgerButton.addEventListener('click', toggleMenu);
console.log(navMenu);


//##### BEGIN ACCORDIAN ########//

//handles accordian drop down actions
function expandAccordianDescription(){

  //handles the toggle indicator
  for(i=0; i<accordianHeaders.length; i++){
    accordianHeaders[i].childNodes[3].innerHTML = '+';
    accordianDescription[i].classList.remove('accordian-open');

  }
    this.nextElementSibling.classList.toggle('accordian-open');
    this.childNodes[3].innerHTML = '-';

}

//add click event listener for accordian headers
for(i=0; i < accordianHeaders.length; i++){
  accordianHeaders[i].addEventListener('click', expandAccordianDescription);

}
//##### API ########//
var xmlhttp = new XMLHttpRequest();


//Adding state change events hadler to API request
xmlhttp.onreadystatechange = function() {

  //if state change event handler is successful
    if (this.readyState == 4 && this.status == 200) {

        //storing our API object inseide
        var apiResult = JSON.parse(this.responseText);
        //console.log(apiResult);

        //variables for the scholarship cities
        var cityList = document.querySelectorAll('#city-report p span.answers');

        for(i=0; i<20; i++){
          var scholarshipCity = document.createTextNode(apiResult.networks[i].location.city);
          //document.createTextNode(apiResult.networks[i].location.city);
          cityList[i].appendChild(scholarshipCity);
        }

    }
};
xmlhttp.open('GET', 'http://api.citybik.es/v2/networks', true);
xmlhttp.send();
