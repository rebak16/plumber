function lvl1 () {
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
}
lvl1();

