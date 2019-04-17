var angle = 0;
var counter = 0;
var originalcells = document.querySelectorAll('.game-cell');
for (let originalcell of originalcells) {
    originalcell.textContent = "";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    id = ev.target.id;
}

function drop(ev) {
    if (ev.target.name !== "picture") {
        ev.target.append(document.getElementById(id));
    }
}

function rotate() {
    let cells = document.querySelectorAll('.game-cell');
    for (let cell of cells) {
        cell.addEventListener('click', (event) => {
            if (event.target.className !== 'game-cell' && event.target.className !== 'drag') {
                img = event.target;
                angle = (angle + 90) % 360;
                img.className = "image_rotate_" + angle;
            }
        });
    }
}

rotate();


function setTimer() {
    var timeleft = 30;
    var timer = setInterval(function () {
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if (timeleft === 0) {
            clearInterval(timer);
            let counter = 0;
            let images = document.querySelectorAll('img[name="picture"]');
            let switchImages = setInterval(function () {
                for (image of images) {
                    if (image.id === "2_b") {
                        image.src = 'static/images/blue/2_b.png';
                        counter++
                    } else if (image.id === "5") {
                        image.src = 'static/images/blue/5.png';
                        counter++
                    } else if (image.id === "2_c") {
                        image.src = 'static/images/blue/2_c.png'
                    } else if (image.id === "7") {
                        image.src = 'static/images/blue/7.png'
                    } else if (image.id === "image1") {
                        image.src = 'static/images/blue/9.png'
                    } else if (image.id === "image2") {
                        image.src = 'static/images/blue/2_b.png'
                    } else if (image.id === "image3") {
                        image.src = 'static/images/blue/7.png'
                    } else if (image.id === "image4") {
                        image.src = 'static/images/blue/2_c.png'
                    } else if (image.id === "image5") {
                        image.src = 'static/images/blue/2_a.png'
                    }
                }
                if (counter === 12) {
                    clearInterval(switchImages)
                }
            }, 2000);
        }
    }, 1000);
}

setTimer();

function textcontentCounter() {
    let cells = document.querySelectorAll('.game-cell');
    for (let cell of cells) {
        cell.addEventListener('click',(event) => {
            if (event.target.className !== 'game-cell') {
                counter = (counter+1)%4;
                event.target.textContent = counter;
            }
        });
    }
}

textcontentCounter();