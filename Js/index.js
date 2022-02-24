let fb = document.getElementById('fbWidget')
let insta = document.getElementById('instaWidget')
let twit = document.getElementById('twitWidget')
let mail = document.getElementById('mailbWidget')

let widget = document.getElementById('widgetListener')
let widgetImage = document.getElementById('widgetImage')
let shortdesc = document.getElementById('shortdesc')

//mouse over
fb.addEventListener("mouseover", function(){
    widgetImage.src="Images/facebook-widget.png"
    widget.style.cssText="opacity: 1; transition: 0.3s; pointer-events: visible;"
}, true)

//mouse leave.
fb.addEventListener("mouseleave", function(){
    widget.style.cssText="opacity: 0; transition: 0.3s; pointer-events: none;"
})

//mouse over
insta.addEventListener("mouseover", function(){
    widgetImage.src="Images/instagram-widget.png"
    widget.style.cssText="opacity: 1; transition: 0.3s; pointer-events: visible;"
}, true)

//mouse leave.
insta.addEventListener("mouseleave", function(){
    widget.style.cssText="opacity: 0; transition: 0.3s; pointer-events: none;"
})