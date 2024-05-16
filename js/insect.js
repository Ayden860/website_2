// console.log('hello')
const screens = document.querySelectorAll('.screen')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = document.getElementById('game-container')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const message_2 = document.getElementById('message-2')
let seconds = 0
let score = 0
var j = 0
let selected_insect = {}
var stopGame = false

// console.log(start_btn)
if (stopGame == false) {
    start_btn.addEventListener('click', () => {
        screens[0].classList.add('up')
    })

    choose_insect_btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const img = btn.querySelector('img')
            const alt = img.getAttribute('alt')
            const src = img.getAttribute('src')
            screens[1].classList.add('up')
            selected_insect = { src, alt }
            setTimeout(createInsect, 1000)
            // get rid of ()
            if(stopGame == false){
                startGame()
            }
        })
    })

    function startGame() {
        setInterval(increaseTime, 1000)
    }

    function increaseTime() {
        // used to be let
        var m = Math.floor(seconds / 60)
        let s = seconds % 60
        if (m < 10) {
            m = `0${m}`
        }
        if (s < 10) {
            s = `0${s}`
        }
        timeEl.innerHTML = `Time: ${m}:${s}`
        if (stopGame == false) {
            seconds++
            j++
        }
    }

    function createInsect() {
        const insect = document.createElement('div')
        insect.classList.add('insect')
        const { x, y } = getRandomLocation()
        insect.style.top = `${y}px`
        insect.style.left = `${x}px`
        insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style = "transform: rotate(${Math.random() * 360}deg)"/>`
        game_container.appendChild(insect)
        // used to be inspect
        insect.addEventListener('click', catchInsect)
        // console.log("HELLO")
    }

    function catchInsect() {
        if (stopGame == false) {
            increaseScore()
            this.classList.add('caught')
            setTimeout(() => this.remove(), 2000)
            console.log("CLICK")
            addInsects()
        }
    }

    function addInsects() {
        if (stopGame == false) {
            setTimeout(createInsect, 1000)
            setTimeout(createInsect, 1500)
        }
    }

    function increaseScore() {
        score++
        console.log(j)
        if (score > 19) {
            message.classList.add('visible')
        }
        if (score > 30) {
            message.classList.remove('visible')
        }
        // m does not work
        if (score > 60 && j < 60) {
            message_2.classList.add('visible')
            stopGame = true
        }
        scoreEl.innerHTML = `Score: ${score}`
    }

    function getRandomLocation() {
        const width = window.innerWidth
        const height = window.innerHeight
        const x = Math.random() * (width - 200) + 100
        const y = Math.random() * (height - 200) + 100
        return { x, y }
    }
}
