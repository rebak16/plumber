var angle = 0;
var originalcells = document.querySelectorAll('.game-cell')
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
    ev.target.append(document.getElementById(id));

}

function addImages () {
    let newBox = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/1.png";
    newBox.appendChild(img);

    let newBox1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forRotate/2.png";
    newBox1.appendChild(img);

    let newBox2 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${1}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/9.png";
    newBox2.appendChild(img);

    let newBox3 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/5.png";
    newBox3.appendChild(img);

    let newBox4 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/2_c.png";
    newBox4.appendChild(img);

    let newBox5 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${3}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/2_b.png";
    newBox5.appendChild(img);

    let newBox6 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${3}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/2_a.png";
    newBox6.appendChild(img);

    let newBox7 = document.querySelector(`.game-cell[data-coordinate-x="${2}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/leak.png";
    newBox7.appendChild(img);

    let newBox8 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/forDrag/8.png";
    newBox8.appendChild(img);
}
addImages();


function winCondition() {
    let cells = document.querySelectorAll('.game-cell');
    for (let cell of cells) {
        cell.addEventListener('click',(event) => {
            if (event.target.className !== 'game-cell') {
                img = event.target;
                angle = (angle+90)%360;
                img.className = "image_rotate_"+angle;
            }




            if (event.target.textContent === '0') {
                event.target.textContent = '1';
            }
            else if (event.target.textContent === '1') {
                event.target.textContent = '2';
            }
             else if (event.target.textContent === '2') {
                event.target.textContent = '3';
            }
             else if (event.target.textContent === '3') {
                event.target.textContent = '0';
            }
             else if (event.target.textContent === '') {
                event.target.textContent = '1';
            }

            console.log(event.target.className);
        });
    }
}
winCondition();