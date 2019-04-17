var angle = 0;
var counter =0;
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
        cell.addEventListener('click',(event) => {
            if (event.target.className !== 'game-cell' && event.target.className !== 'drag') {
                img = event.target;
                angle = (angle+90)%360;
                img.className = "image_rotate_"+angle;
            }
        });
    }
}
rotate();

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