const lamps = document.getElementsByClassName("lamp");
const addBtn = document.querySelector(".add");
const hideBtn = document.querySelector(".hide");
const lessMoreBtn = [document.querySelector(".less"), document.querySelector(".more")];
const heart = document.querySelector(".heart");
let typeActive = document.querySelector(".type-active");
const background = document.querySelector(".background");
const typeLamps = document.getElementsByClassName("type-lamp");
const headerLink = document.querySelector(".header-link");
const input = document.querySelector(".input");


window.onload = () => {

    stunt()
    
    background.style.top = `${typeActive.offsetTop}px`
    window.innerWidth <= 350 && (
        background.style.top = `${typeActive.offsetTop + 15}px`
    )
}

window.addEventListener("resize", () => {
    typeActive = document.querySelector(".type-active");
    console.log(typeActive.offsetTop);
    background.style.top = `${typeActive.offsetTop}px`

    window.innerWidth <= 350 && (
        background.style.top = `${typeActive.offsetTop + 15}px`
    )
})

for (const lamp of lamps) {
    
    lamp.addEventListener("click", (e) => {
        const path = e.composedPath();
           
        for (const lamp of lamps) {
            
            lamp.classList.contains("active") && (
                lamp.classList.remove("white-shadow"),
                lamp.childNodes[3].classList.remove("grow"),
                lamp.classList.remove("active")
            ) 
        }

        heart.classList.contains("heart-field") && (
            heart.classList.remove("heart-field"),
            heart.classList.add("scale"),
            setTimeout(() => {
            heart.classList.remove("scale")
            },200)
        )

        hideBtn.classList.contains("visible") && (
            hideBtn.classList.remove("visible"),
            hideBtn.classList.add('hide')
        )
        lamp.classList.add("active");
        
        path[0].classList.add("down");
        lamp.classList.add("white-shadow");
        path[2].lastElementChild.classList.add("grow");
        // console.log(e.path[2].textContent);


        setTimeout(() => {
            
            const title = document.getElementsByTagName("h1");
            const price = Math.round(Math.random() * (300 - 120) + 120);
            document.querySelector(".lamp-name").textContent =  path[2].textContent; 
            title[0].textContent = path[2].textContent;
            document.querySelector(".price").innerHTML = price + "<span>$</span>"
        }, 800);
        
        
        setTimeout(() => {
            path[0].classList.remove("down");
        }, 200 )
        stuntBottom()
    })
}

addBtn.addEventListener("click", e => {
    
    addBtn.classList.add("add-click");
    
    setTimeout(() => {
        hideBtn.classList.remove("hide");
        hideBtn.classList.add("visible");
    },100 )
   
    setTimeout(() => {
        addBtn.classList.remove("add-click");
    },400 )
})

for (const btn of lessMoreBtn) {
    
    btn.addEventListener("click", e => {
        
        btn.classList.add("less-more-click");

        setTimeout(() => {
            btn.classList.remove("less-more-click");
        },200)

        btn.classList.contains("less") ? (
            input.value--
        ) : (
            input.value++ 
        )
    })
}

heart.addEventListener("click", (e) => {

    heart.classList.contains("heart-field") ? (
        heart.classList.remove("heart-field"),
        heart.classList.add("scale"),
        setTimeout(() => {
            heart.classList.remove("scale")
        },200)

    ) : (
        heart.classList.add("heart-field"),
        heart.classList.add("scale"),
        setTimeout(() => {
            heart.classList.remove("scale")
        },200)
        
    ) 
})

for (const typeLamp of typeLamps) {

    
    typeLamp.addEventListener("click", e => {

        for (const typeLamp of typeLamps) {
            
            typeLamp.classList.remove("type-active");
            typeLamp.classList.remove("fill");
        }
        setTimeout(() => {
            typeLamp.classList.add("fill");
        }, 200);
        
        if (window.innerWidth >= 350) {
            background.style.top = `${typeLamp.offsetTop}px`
        } else {
            background.style.top = `${typeLamp.offsetTop + 15}px`
        }
        
        typeLamp.classList.add("type-active") 
    } )
}

for (const btn of headerLink.children) {
    
    btn.addEventListener("click", () => {

        for (i = 0; i < headerLink.children.length; i++ ) {
            headerLink.children[i].classList.contains("header-link-click") && (
                headerLink.children[i].classList.remove("header-link-click"),
                headerLink.children[i].classList.add("link")
            )
        }
        btn.classList.remove("link");
        btn.classList.add("header-link-click");  
    })
}

function stunt() {
    let element = document.querySelector(".stunt");
    let lampsStunt = document.querySelectorAll(".lamp-stunt");
    

    for (const lampStunts of lampsStunt) {
        lampStunts.classList.remove("lamp-stunt") 
    }
    
    let interval = setInterval(() => {
        
        element.classList.contains("bottom") && element.classList.remove("bottom")
        element.classList.remove("stunt");
        element.classList.add("move-bot");
        element = document.querySelector(".stunt");
        element === null && clearInterval(interval);
    }, 50)
} 

function stuntBottom() {
    let lamps = document.querySelectorAll(".lamp-light")
    
    for (const lamp of lamps) {
        lamp.classList.add("lamp-stunt") 
    }
    setTimeout(() => {
        let interval = setInterval(() => {
            let moveBot = document.querySelectorAll(".move-bot");
            let removeBot = document.querySelector(".bottom");
            moveBot[moveBot.length - 2] === undefined && clearInterval(interval);
            moveBot[moveBot.length - 1].classList.add("stunt");
            moveBot[moveBot.length - 1].classList.remove("move-bot");
            moveBot[moveBot.length - 1].classList.add("bottom");
            if (moveBot.length < 2) {
                moveBot[moveBot.length - 1].classList.add("stunt")
                setTimeout(() => {
                    moveBot[moveBot.length - 1].classList.remove("bottom")
                },180)
            }
            setTimeout(() => {
                removeBot?.classList.remove("bottom")
                
            }, 150);
        }, 50 )
    }, 200)
    

    setTimeout(() => {
        stunt()
    }, 800);
}