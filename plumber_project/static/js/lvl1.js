function addImages () {
    let newBox = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "static/images/whiteWithGrey/1_b.png";
    img.name = "picture";
    img.className = "drag";
    newBox.appendChild(img);

    let newBox1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_b.png";
    img.id = "2_b";
    img.name = "picture";
    newBox1.appendChild(img);

    let newBox2 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/whiteWithGrey/5.png";
    img.id = "5";
    img.className = "drag";
    img.name = "picture";
    newBox2.appendChild(img);

    let newBox3 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_b.png";
    img.id = "2_b";
    img.name = "picture";
    newBox3.appendChild(img);

    let newBox4 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${3}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_c.png";
    img.id = "2_c";
    img.name = "picture";
    newBox4.appendChild(img);

    let newBox5 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/whiteWithGrey/7.png";
    img.id = "7";
    img.name = "picture";
    img.className = "drag";
    newBox5.appendChild(img);

    let newBox6 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${2}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_c.png";
    img.id = "2_c";
    img.name = "picture";
    newBox6.appendChild(img);

    let newBox7 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${3}"]`);
    var img = document.createElement("img");
    img.src = "static/images/white/2_c.png";
    img.id = "2_c";
    img.name = "picture";
    newBox7.appendChild(img);

    let newBox8 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${4}"]`);
    var img = document.createElement("img");
    img.src = "static/images/whiteWithGrey/8_b.png";
    img.id = "8_b";
    img.name = "picture";
    img.className = "drag";
    newBox8.appendChild(img);


    let newDropBox1 = document.querySelector(`.image[data-coordinate-x="${0}"].image[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "/static/images/whiteWithBrown/9.png";
    img.className = "drag";
    img.id = "image1";
    img.ondragstart = function(){dragStart(event)};;
    newDropBox1.appendChild(img);

    let newDropBox2 = document.querySelector(`.image[data-coordinate-x="${1}"].image[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "/static/images/whiteWithBrown/2_b.png";
    img.className = "drag";
    img.id = "image2";
    img.ondragstart = function(){dragStart(event)};;
    newDropBox2.appendChild(img);

    let newDropBox3 = document.querySelector(`.image[data-coordinate-x="${2}"].image[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "/static/images/whiteWithBrown/7.png";
    img.className = "drag";
    img.id = "image3";
    img.ondragstart = function(){dragStart(event)};;
    newDropBox3.appendChild(img);

    let newDropBox4 = document.querySelector(`.image[data-coordinate-x="${3}"].image[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "/static/images/whiteWithBrown/2_c.png";
    img.className = "drag";
    img.id = "image4";
    img.ondragstart = function(){dragStart(event)};;
    newDropBox4.appendChild(img);

    let newDropBox5 = document.querySelector(`.image[data-coordinate-x="${4}"].image[data-coordinate-y="${0}"]`);
    var img = document.createElement("img");
    img.src = "/static/images/whiteWithBrown/2_a.png";
    img.className = "drag";
    img.id = "image5";
    img.ondragstart = function(){dragStart(event)};;
    newDropBox5.appendChild(img);
}
addImages();

function win() {
    let cells = document.querySelectorAll('.game-cell');
    for (let cell of cells) {
        cell.addEventListener('dragend',(event) => {
            let Box1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${0}"]`);
            let Box3 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${2}"]`);
            let Box4 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${3}"]`);
            let Box7 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${2}"]`);
            let Box8 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${3}"]`);

            let pic = document.querySelector(`.game-cell[data-coordinate-x="${2}"].game-cell[data-coordinate-y="${2}"]`);
            let pic_child = document.getElementById('image3');
            let pic1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${1}"]`);
            let pic1_child = document.getElementById('image1');
            let pic2 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${3}"]`);
            let pic2_child = document.getElementById('image5');
            let pic3 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${3}"]`);
            let pic3_child = document.getElementById('image4');
            let pic4 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${4}"]`);
            let pic4_child = document.getElementById('image2');

            if (Box1.textContent === '2' &&
                Box3.textContent === '1' &&
                Box4.textContent === '3' &&
                Box7.textContent === '1' &&
                Box8.textContent === '2' &&
                pic_child.parentNode === pic &&
                pic1_child.parentNode === pic1 &&
                pic2_child.parentNode === pic2 &&
                pic3_child.parentNode === pic3 &&
                pic4_child.parentNode === pic4) {
                alert('You Win!')
            }
        });
    }

}
win();

function win1() {
    let cells = document.querySelectorAll('.game-cell');
    for (let cell of cells) {
        cell.addEventListener('click',(event) => {
            let Box1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${0}"]`);
            let Box3 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${2}"]`);
            let Box4 = document.querySelector(`.game-cell[data-coordinate-x="${0}"].game-cell[data-coordinate-y="${3}"]`);
            let Box7 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${2}"]`);
            let Box8 = document.querySelector(`.game-cell[data-coordinate-x="${4}"].game-cell[data-coordinate-y="${3}"]`);

            let pic = document.querySelector(`.game-cell[data-coordinate-x="${2}"].game-cell[data-coordinate-y="${2}"]`);
            let pic_child = document.getElementById('image3');
            let pic1 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${1}"]`);
            let pic1_child = document.getElementById('image1');
            let pic2 = document.querySelector(`.game-cell[data-coordinate-x="${1}"].game-cell[data-coordinate-y="${3}"]`);
            let pic2_child = document.getElementById('image5');
            let pic3 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${3}"]`);
            let pic3_child = document.getElementById('image4');
            let pic4 = document.querySelector(`.game-cell[data-coordinate-x="${3}"].game-cell[data-coordinate-y="${4}"]`);
            let pic4_child = document.getElementById('image2');

            if (Box1.textContent === '2' &&
                Box3.textContent === '1' &&
                Box4.textContent === '3' &&
                Box7.textContent === '1' &&
                Box8.textContent === '2' &&
                pic_child.parentNode === pic &&
                pic1_child.parentNode === pic1 &&
                pic2_child.parentNode === pic2 &&
                pic3_child.parentNode === pic3 &&
                pic4_child.parentNode === pic4) {
                alert('You Win!')
            }
        });
    }

}
win1();

