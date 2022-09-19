import { animate } from './helpers'

const move = () => {
    const playerBlock = document.querySelector('.game > div')
    console.log('2');
    let startBottom = 100
    let startLeft = 50

    const start = (e) => {
        if (e.key === 'Escape') {
            document.removeEventListener('keydown', start)
            document.addEventListener('keydown', movement)
        }
    }

    const movement = (e) => {
        if (e.key === "ArrowUp") {
            if (startBottom < 506) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom + progress * 5 + 'px';
                    }
                  });
                startBottom = startBottom + 5
            }
            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowDown") {
            if (startBottom > 0) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom - progress * 5 + 'px';
                    }
                  });
                startBottom = startBottom - 5
            }
            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowLeft") {
            if (startLeft > 4.5) {
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
            if (startLeft < 94.5) {
                console.log(startLeft);
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
            document.addEventListener('keydown', start)
        } 
    }

    document.addEventListener('keydown', movement)
}

export default move