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
    if (ev.target.name !== "picture"){
        ev.target.append(document.getElementById(id));
    }


}

function addImages () {
    let newBox = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/1.png";
    img.name = "picture";
    newBox.appendChild(img);

    let newBox1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2.png";
    img.name = "picture";
    newBox1.appendChild(img);

    let newBox2 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${1}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/9.png";
    img.name = "picture";
    newBox2.appendChild(img);

    let newBox3 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/5.png";
    img.name = "picture";
    newBox3.appendChild(img);

    let newBox4 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_c.png";
    img.name = "picture";
    newBox4.appendChild(img);

    let newBox5 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${3}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_b.png";
    img.name = "picture";
    newBox5.appendChild(img);

    let newBox6 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${3}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_a.png";
    img.name = "picture";
    newBox6.appendChild(img);

    let newBox7 = document.querySelector(`.game-cell[data-coordinate-x="${2}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/leak.png";
    img.name = "picture";
    newBox7.appendChild(img);

    let newBox8 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/8.png";
    img.name = "picture";
    newBox8.appendChild(img);
}
addImages();


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


function winCondition() {
    let cells = document.querySelectorAll('.game-cell');
    for (let cell of cells) {
        cell.addEventListener('click',(event) => {
            counter = (counter+1)%3;
            event.target.textContent = counter;
            console.log(event.target.className);
        });
    }
}
winCondition();