// Scroll to top button
let toTop = document.getElementById("scroll-to-top");
window.onload = window.onscroll = function () {
    if (window.scrollY > 600) {
        toTop.style.transition = "5s";
        toTop.style.display = "block";
        toTop.onclick = function (e) {
            window.scrollTo(window.scrollX, 0)
        }
    } else {
        toTop.style.display = "none";
    }
}

// Mega Menu
const linksBtn = document.querySelector(".other-links");
const megaMenu = document.querySelector(".mega-menu");
const landing = document.querySelector(".landing");
const header = document.querySelector("header");

linksBtn.addEventListener("click", function appear() {
    // megaMenu.style.display = "grid";
    if (megaMenu.style.display === "grid") {
        megaMenu.style.display = "none";
    } else {
        megaMenu.style.display = "grid";
    }


    landing.onclick = function () {
        megaMenu.style.display = "none";
    }
})
// Animate Width On Scrolling

window.addEventListener('scroll', () => {
    const skillsSectionOffsetY = document.getElementById('skills').getBoundingClientRect().y
    const skillsFill = document.querySelectorAll('.web-skills .fill')

    if (skillsSectionOffsetY < window.innerHeight * (4/5)) {
        skillsFill.forEach(ele => {
            ele.style.width = ele.getAttribute('data-fill')
        })
    }
})
// Event CountDown
const goal = new Date('dec 31 2023 23:59:59').getTime()

function findRemainingTime() {
    const counter = setInterval(() => {
        const now = new Date().getTime()

        const diff = goal - now
        const days = Math.floor( diff / (1000 * 60 * 60 * 24)) 
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((diff % (1000 * 60)) / 1000)
        
        document.querySelector('.days h3').innerText = days < 10 ? `00${days}` : days < 100 && days > 10 ? `0${days}` : days
        document.querySelector('.hours h3').innerText = hours < 10 ? `0${hours}` : hours
        document.querySelector('.minutes h3').innerText = minutes < 10 ? `0${minutes}` : minutes
        document.querySelector('.seconds h3').innerText = seconds < 10 ? `0${seconds}` : seconds

        if (diff <= 0) {
            clearInterval(counter)
        }
    }, 1000)
}


findRemainingTime()

// JavaScript Countdown in Stats section

window.addEventListener('scroll', () => {
    const statsSectionOffsetY = document.getElementById('stats').getBoundingClientRect().y
    const stats = document.querySelectorAll('#stats .container h3')

    if (statsSectionOffsetY < window.innerHeight * (4/5)) {
        stats.forEach(ele => {
            let i = ele.innerText
            const limit = ele.getAttribute('data-stat')

            let interval = setInterval(() => {
                if(i <= limit) {
                    ele.innerText = i++
                } else {
                    clearInterval(interval)
                }
            }, 500 / limit)
        })
    }
})
