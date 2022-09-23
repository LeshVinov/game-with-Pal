import { animate } from './helpers'
import { timer } from './timer'

const move = () => {
    const playerBlock = document.querySelector('.player-block')
    const escapeScreen = document.querySelector('.escape-screen')
    const timerBlock = document.querySelector('.timer')

    let startBottom = 100
    let startLeft = 50
    let timerOn = true

    let seconds = 0
    let interval
    let minutes = 0

    const render = (minutes, seconds) => {
        timerBlock.textContent = `${minutes} : ${seconds}`
    }

    const timePlus = () => {
        let fullMinutes = '00'
        let fullSeconds = '00'
        seconds++
        if (seconds >= 60) {
            minutes += 1
            seconds = 0
        }
        if (minutes < 10) {
            fullMinutes = `0${minutes}`
        } else {
            fullMinutes = minutes
        }
        if (seconds < 10) {
            fullSeconds = `0${seconds}`
        } else {
            fullSeconds = seconds
        }
        render(fullMinutes, fullSeconds)
    }

    const start = (e) => {
        if (e.key === 'Escape') {
            document.removeEventListener('keydown', start)
            escapeScreen.style.display = "none"
            document.addEventListener('keydown', movement)
            interval = setInterval(timePlus, 1000)

        }
    }

    const movement = (e) => {
        if (e.key === "ArrowUp") {
            if (startBottom < (window.innerHeight - 450)) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom + progress * 10 + 'px';
                    }
                });
                startBottom = startBottom + 5
            }

            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowDown") {
            if (startBottom) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom - progress * 10 + 'px';
                    }
                  });
                startBottom = startBottom - 5
            }
            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowLeft") {
            playerBlock.style.transform='scale(1,1)'
            if (startLeft > 3) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.left = startLeft - progress * 0.5 + '%';
                    }
                  });
                startLeft = startLeft - 0.5
            }
            // playerBlock.style.left = `${startLeft}px`
        } else if (e.key === "ArrowRight") {
            playerBlock.style.transform='scale(-1,1)'
            if (startLeft < 95.5) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.left = startLeft + progress * 0.5 + '%';
                    }
                  });
                startLeft = startLeft + 0.5
            }
            // playerBlock.style.left = `${startLeft}px`
        } if (e.key === "Escape") {
            document.removeEventListener('keydown', movement)
            escapeScreen.style.display = "block"
            clearInterval(interval)
            document.addEventListener('keydown', start)
        } 
    }



    document.addEventListener('keydown', movement)
    interval = setInterval(timePlus, 1000)


}

export default move