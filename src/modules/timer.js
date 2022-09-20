const timer = () => {
    const timerHours = document.querySelector('.timer-container__hours')
    const timerMinutes = document.querySelector('.timer-container__minutes')
    const timerSeconds = document.querySelector('.timer-container__seconds')

    let sec = 0
    let min = 0
    let hrs = 0

    let timerOn = true

    let intervalID

    function tick(){
        sec++;
        if (sec >= 60) {
            sec = 0
            min++
            if (min >= 60) {
                min = 0
                hrs++
            }
        }
    }

    const updateClock = () => {
        tick()
        const zeroToNumber = () => {
            if (hrs < 10) {
                timerHours.textContent = '0' + hrs
            }
            if (min < 10) {
                timerMinutes.textContent = '0' + min
            }
            if (sec < 10) {
                timerSeconds.textContent = '0' + sec
            }
        }

        timerHours.textContent = hrs
        timerMinutes.textContent = min
        timerSeconds.textContent = sec
        
        zeroToNumber()
        
    }
    intervalID = setInterval(() => {
        updateClock()
    }, 1000);
}



export default timer