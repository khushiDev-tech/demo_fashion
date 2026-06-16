const announcements = [
    "FREE WORLDWIDE SHIPPING ON ALL ORDERS",
    "GET 10% OFF ON YOUR FIRST PURCHASE",
    "NEW SUMMER COLLECTION IS NOW LIVE"
];

let current = 0;

const text = document.querySelector(".announcement-text");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showAnnouncement(index){

    text.style.opacity = 0;

    setTimeout(() => {
        text.textContent = announcements[index];
        text.style.opacity = 1;
    },200);

}

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= announcements.length){
        current = 0;
    }

    showAnnouncement(current);

});

prevBtn.addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = announcements.length - 1;
    }

    showAnnouncement(current);

});



