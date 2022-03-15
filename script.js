// search bar reply style 
var msg = document.querySelector("message");
var btn = document.querySelector("send");
var ans = document.querySelector("answer");


btn.addEventListener("click", function () {

    let c = msg.value.toLowerCase();
    let reply = "";

    if (c.match("hellow")) {
        reply = "hellow there!";
    } else if (c.match("who are you?")) {
        reply = "i'm raj assistence, you?";
    } else if (c.match("how are you?")) {
        reply = "i'm fine and you?";
    } else if (c.match("where are you from?"){
        reply = "i'm from rajshahi, you?";
    } else {
        reply = "i don't understand, try another way!"
    }

    ans.innerHTML = reply;

    var jakkas = new SpeechSynthesisUtterance(reply);

    window.speechSynthesis.speak(jakkas);


})

// // toggle menu
// jQuery(".toggle-menu").click(function () {
//     jQuery(".main-menu ul").slideToggle();
// });

// // scrolltop
// jQuery(".totop").click(function () {
//     jQuery("html, body").animate({
//         "scrollTop": "0px"
//     }, 2000);
// });

// // if else scrollbar condition
// console.log(jQuery(window).scrollTop());
// jQuery(window).scroll(function () {
//     if (jQuery(window).scrollTop() > 300) {
//         jQuery(".totop").fadeIn();
//     } else {
//         jQuery(".totop").fadeOut();
//     }
// });