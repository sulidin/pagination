

var contact_list = document.querySelector(".contact-list");
var contacts = document.querySelectorAll('.contact-item');
var contacts_arr = [];

//pass html list to an array
for (let index = 0; index < contacts.length; index++) {
    const element = contacts[index].innerHTML;
    contacts_arr.push(element);
}

//set initial page number and total contacts to display on a page
let currPage = 1;
let totalContacts = 10;

//assign pagination buttons
const prevPageButton = document.getElementById('prev_page');
const nextPageButton = document.getElementById('next_page');



//event listeners for buttons 
prevPageButton.addEventListener('click', prevPage);
nextPageButton.addEventListener('click', nextPage);


changePage(currPage);
pageNumbers();

//add event listeners for page number 
document.querySelectorAll(".pageNum").forEach(i => i.addEventListener(
    "click",
    e => {
        //set current page to clicked page number
        currPage = e.target.textContent;
        changePage(currPage);
    }));



//functions for page change buttons, updating current page
function prevPage() {
    if (currPage > 1) {
        currPage--;
        changePage(currPage);
    }
    else {
        changePage(currPage);
    }
}
function nextPage() {
    if (currPage < totalPages()) {
        currPage++;
        changePage(currPage);
    }
}

// change and set page by changing inner html of contact-list 
function changePage(pageNum) {

    if (pageNum < 1) {
        pageNum = 1;
    }
    if (pageNum > (totalPages() - 1)) {
        pageNum = totalPages();
    }

    contact_list.innerHTML = "";

    //set page material 
    for (var i = (pageNum - 1) * totalContacts; i < (pageNum * totalContacts) && i < contacts_arr.length; i++) {
        contact_list.innerHTML += "<li class='contact-item cf'>" + contacts_arr[i] + "</li>";
    }
}

//Calculate total pages on pagination list
function totalPages() {
    return Math.ceil(contacts_arr.length / totalContacts);
}

//set pagination list page numbers
function pageNumbers() {
    var pagiList = document.querySelector(".pageNumbers");
    pagiList.innerHTML = "";
    for (let i = 1; i < totalPages() + 1; i++) {
        pagiList.innerHTML += "<a class='pageNum' href='#'>" + i + "</a>";
    }
}






