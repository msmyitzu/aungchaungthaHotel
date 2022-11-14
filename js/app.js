// Start Jquery Area
$(document).ready(function() {
    // console.log('hi');
});
// Start rooms Section
$('.roompopup').magnificPopup({ type: 'image' });
// End rooms Section 


//End jquery Area

// Start javaScript Area

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
    // getlinks = Array.from(getlinks);

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

var index = getgen.next().value;

var getheader = document.querySelector('header');
// getheader.style.backgroundImage = `url("./assets/img/banner/banner/banner8.jpg")`;

function autoload() {
    // console.log(getgen.next().value);

    getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}
setInterval(autoload, 2500);
// end auto background 

// End Header
// Start Testimonial Section
const getcompanyname = document.querySelector('.companyname');
const getrole = document.querySelector('.role');
const gettestimonial = document.querySelector('.testimonial');

const testimonialdatas = [{
        name: "Rich Star Restaurant",
        position: "Our Outlet",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam ipsam nisi necessitatibus praesentium, quis magnam esse laboriosam omnis? Libero, molestiae. Ipsa inventore illo optio eligendi architecto? Quisquam, eum accusamus?"
    },
    {
        name: "48 Sky Bar Cafe",
        position: "Our Partner",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam ipsam nisi necessitatibus praesentium, quis magnam esse laboriosam omnis? Libero, molestiae. Ipsa inventore illo optio eligendi architecto? Quisquam, eum accusamus?"
    },
    {
        name: "52 Beach Hotel",
        position: "Our Branch",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam ipsam nisi necessitatibus praesentium, quis magnam esse laboriosam omnis? Libero, molestiae. Ipsa inventore illo optio eligendi architecto? Quisquam, eum accusamus?"
    },
    {
        name: "Cool Land Swimming Pool",
        position: "Our Client",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam ipsam nisi necessitatibus praesentium, quis magnam esse laboriosam omnis? Libero, molestiae. Ipsa inventore illo optio eligendi architecto? Quisquam, eum accusamus?"
    },
    {
        name: "Chaung Thar SPA",
        position: "Our Bussiness",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam ipsam nisi necessitatibus praesentium, quis magnam esse laboriosam omnis? Libero, molestiae. Ipsa inventore illo optio eligendi architecto? Quisquam, eum accusamus?"
    },
];

let idx = 0;
// console.log(testimonialdatas[idx]);
// console.log(testimonialdatas[idx].name);
// console.log(testimonialdatas[idx].position);
// console.log(testimonialdatas[idx].text);

function updatetestimonial() {

    getcompanyname.textContent = testimonialdatas[idx].name;
    getrole.textContent = testimonialdatas[idx].position;
    gettestimonial.textContent = testimonialdatas[idx].text;

    // const { name, position, text } = testimonialdatas[idx];
    // console.log(name);
    // console.log(position);
    // console.log(text);

    idx++;

    if (idx > testimonialdatas.length - 1) {
        idx = 0;
    }
}
setInterval(updatetestimonial, 10000);


// End Testimonial Section