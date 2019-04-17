var angle = 0;
var win = 0;
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
            alert('Game Over!')
        }
        else if (win === 1) {
            clearInterval(timer);
            alert('You Won!');
            let images = document.querySelectorAll('img');
                for (image of images) {
                    if (image.id === "2_b") {
                        image.src = 'static/images/blue/2_b.png';
                    } else if (image.id === "5") {
                        image.src = 'static/images/blue/5_a.png';
                    } else if (image.id === "2_c") {
                        image.src = 'static/images/blue/2_c.png'
                    } else if (image.id === "7") {
                        image.src = 'static/images/blue/7_a.png'
                    } else if (image.id === "image1") {
                        image.src = 'static/images/blue/9_a.png'
                    } else if (image.id === "image2") {
                        image.src = 'static/images/blue/2_b_a.png'
                    } else if (image.id === "image3") {
                        image.src = 'static/images/blue/7_a_a.png'
                    } else if (image.id === "image4") {
                        image.src = 'static/images/blue/2_c_a.png'
                    } else if (image.id === "image5") {
                        image.src = 'static/images/blue/2_a_a.png'
                    }
                }
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

