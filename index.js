let nav = document.getElementById("nav")
let menu = document.getElementById("all-menu")
let navContainer = document.getElementById("nav-container")
let count = 0;

navContainer.addEventListener('click', ()=>{
    count ++
    console.log('me')
    // console.log(count)
    if(count > 0 ){
        console.log(count)
        menu.style.transition = "1s";
        menu.style.margin = "0 0 0 0";
        navContainer.innerHTML = `<i class="fa-solid fa-x"></i>`
    }
    if(count == 2){
        menu.style.transition = "1s";
        menu.style.margin = "0 0 0 -100vw";
        navContainer.innerHTML = `<i class="fa-solid fa-bars"></i>`

        count = 0;
    }
})

