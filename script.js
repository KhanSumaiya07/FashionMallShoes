var left = document.querySelector(".left")
var right = document.querySelector(".right")
var lbtn = document.querySelector(".left button")
var rbtn = document.querySelector(".right button")
var main = document.querySelector("#main")
var page1= document.querySelector("#blue-page")
var page2= document.querySelector("#yellow-page")
var rightContent = document.querySelector("#right-cont")
var leftContent = document.querySelector("#left-cont")
var backB = document.querySelector("#blue_back")
var backY = document.querySelector("#yellow_back")
var lefticon= document.querySelector(".l-icon")
var righticon= document.querySelector(".r-icon")
var page3 = document.querySelector("#shopping-bag")
var navMid = document.querySelector(".nav-mid")
var close = document.querySelector(".close-right")

left.addEventListener('click',function(){
    left.style.width = '70%';
    right.style.width = '30%';
    leftContent.style.marginLeft = '70px';
})
right.addEventListener('click',function(){
    left.style.width = '30%';
    right.style.width = '70%';
    leftContent.style.marginLeft = '-20%';
})
lbtn.addEventListener('click',function(){
    page1.style.left = '-5%';
    rightContent.style.display = 'none';
    righticon.style.display = 'initial';
})
rbtn.addEventListener('click',function(){
    page2.style.right = '-5%';
    leftContent.style.display = 'none';
    lefticon.style.display = 'initial';
})
backB.addEventListener('click',function(){
    page1.style.left = '-100%';
    rightContent.style.display = 'initial';
    righticon.style.display = 'none';
    leftContent.style.display = 'initial';
    lefticon.style.display = 'none';
})

backY.addEventListener('click',function(){
    page2.style.right = '-100%';
    lefticon.style.display = 'none';
    righticon.style.display = 'none';
    leftContent.style.display = 'initial';
    rightContent.style.display= 'initial';
})

lefticon.addEventListener('click',function(){
    page1.style.left = '-5%';
    page2.style.display = 'none';
    rightContent.style.display = 'none';
    righticon.style.display = 'initial';
})
righticon.addEventListener('click',function(){
    page2.style.right = '-5%';
    page1.style.display = 'none';
    leftContent.style.display = 'none';
    lefticon.style.display = 'initial';
})
navMid.addEventListener('click',function(){
    page3.style.bottom = '-4%';
})
close.addEventListener('click',function(){
    page3.style.bottom = '-100%';
})