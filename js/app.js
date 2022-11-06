// Start Jquery Area
$(document).ready(function() {
    // console.log('hi');
});
// Start rooms Section
$('.roompopup').magnificPopup({ type: 'image' });
// End rooms Section 


//End jquery Area

// Start Header
// Start nav Bar
function dropbtn(e) {
    // document.getElementById('mydropdown').classList.toggle('show');
    e.target.nextElementSibling.classList.toggle('show');
}

function dropfilter() {
    var getsearch, filter, getdropdiv, getlinks, linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById('mydropdown');
    // getlinks = getdropdiv.getElementsByTagName('a');
    getlinks = document.querySelectorAll('.mydropdowns a');
    // console.log(getlinks);

    for (var x = 0; x < getlinks.length; x++) {
        // linkvalue = getlinks[x].textContent ;
        linkvalue = getlinks[x].textContent || getlinks[x].innerText;

        if (linkvalue.toUpperCase().indexOf(filter) > -1) {
            getlinks[x].style.display = "block";

        } else {
            getlinks[x].style.display = "none";
        }
    }
}
// End nav bar 

// start auto background

function* genfun() {
    var index = 8;

    while (true) {
        yield index++;

        if (index > 13) {
            index = 8;
        }
    }
}
var getgen = genfun();

var idx = getgen.next().value;

var getheader = document.querySelector('header');
getheader.style.backgroundImage = `url("./assets/img/banner/banner/banner8.jpg")`;

function autoload() {
    // console.log(getgen.next().value);

    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}
setInterval(autoload, 2500);
// end auto background 

// End Header
// Start Testimonial 
const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdatas = {

}
3 TM

// End Testimonial