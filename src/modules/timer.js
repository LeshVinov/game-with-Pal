const timer = () => {
    const timerBlock = document.querySelector('.timer')

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
    interval = setInterval(timePlus, 1000)
}



export { timer }