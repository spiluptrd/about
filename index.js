let nav = document.getElementById("nav")
let menu = document.getElementById("all-menu")
let navContainer = document.getElementById("nav-container")
let count = 0;
let firstCount = 0;
let secnodCount = 0;
let thirdCount = 0;
let seeMore = document.querySelector("#div1btn")
let secondSeeMore = document.querySelector("#div2btn")
let thirdSeeMore = document.querySelector("#div3btn")
let div1 = document.querySelector("#div1")
let div2 = document.querySelector("#div2")
let div3 = document.querySelector("#div3")

navContainer.addEventListener('click', ()=>{
    count ++
    console.log('me')
    // console.log(count)
    if(count > 0 ){
        console.log(count)
        menu.style.transition = "1s";
        menu.style.margin = "-5% 0 0 0";
        navContainer.innerHTML = `<i class="fa-solid fa-x"></i>`
    }
    if(count == 2){
        menu.style.transition = "1s";
        menu.style.margin = "-5% 0 0 -100vw";
        navContainer.innerHTML = `<i class="fa-solid fa-bars"></i>`

        count = 0;
    }
})

seeMore.addEventListener('click', ()=>{
    firstCount ++
    if(firstCount > 0 ){
        console.log(firstCount)
        div1.style.transition = "1s";
        div1.style.overflow = 'hidden'
        div1.style.height = 'max-content'        
        seeMore.innerHTML = `View less &nbsp; <i class="fa-solid fa-arrow-up"></i>`
    }
    if(firstCount == 2){
        div1.style.overflow = 'hidden'
        div1.style.height = '21vh'
        seeMore.innerHTML = `See more &nbsp; <i class="fa-solid fa-arrow-down"></i>`

        firstCount = 0;
    }
    
})

secondSeeMore.addEventListener('click',()=>{
    secnodCount ++;
    console.log(secnodCount)
    if(secnodCount > 0 ){
        div2.style.transition = "1s";
        div2.style.overflow = 'hidden'
        div2.style.height = 'max-content'        
        secondSeeMore.innerHTML = `View less &nbsp; <i class="fa-solid fa-arrow-up"></i>`
    }
    if(secnodCount == 2){
        div2.style.overflow = 'hidden'
        div2.style.height = '21vh'
        secondSeeMore.innerHTML = `See more &nbsp; <i class="fa-solid fa-arrow-down"></i>`

        secnodCount = 0;
    }
})

thirdSeeMore.addEventListener('click',()=>{
    thirdCount ++;
    console.log(thirdCount)
    if(thirdCount > 0 ){
        div3.style.transition = "1s ease";
        div3.style.overflow = 'hidden'
        div3.style.height = 'max-content'        
        thirdSeeMore.innerHTML = `View less &nbsp; <i class="fa-solid fa-arrow-up"></i>`
    }
    if(thirdCount == 2){
        div3.style.overflow = 'hidden'
        div3.style.height = '21vh'
        thirdSeeMore.innerHTML = `See more &nbsp; <i class="fa-solid fa-arrow-down"></i>`

        thirdCount = 0;
    }
})