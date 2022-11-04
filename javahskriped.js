var colorchange = false;

function mode() {
    if (colorchange == false) {
        darkmode();
    } else {
        lightmode();
    }
}

function darkmode() {
    document.body.style.backgroundColor = "#121212";
    document.querySelector('button').style.backgroundColor='#808080';
    document.getElementById('reset').style.backgroundColor='#808080';
    document.querySelector('p').style.color="#ebebeb";
    document.getElementById('why').style.color='#ebebeb';
    var cell = document.getElementById("table").getElementsByTagName("th");
    for (i = 0; i < 8; i++) {
        cell[i].style.backgroundColor="#5A5A5A";
        cell[i].style.color="#ebebeb";
    }
    var celltd = document.getElementById("table").getElementsByTagName("td");
    for (i = 0; i < 40; i++) {
        celltd[i].style.backgroundColor="#AAAAAA";
        celltd[i].style.color="#ebebeb"
    }
    var cellside = document.getElementsByClassName("grey");
    for (i = 0; i < 5; i++) {
        cellside[i].style.backgroundColor="#5A5A5A";
    }
    colorchange = true;
}


function refresh() {
    location.reload(true);
    window.location.reload();
}

function lightmode() {
    document.body.style.backgroundColor = "white";
    document.querySelector('table').style.color='black';
    document.querySelector('button').style.backgroundColor='#abadb0';
    document.getElementById('reset').style.backgroundColor='#abadb0';
    document.querySelector('p').style.color='black';
    document.getElementById('why').style.color='black';
    var celllight = document.getElementById("table").getElementsByTagName("th");
    for (i = 0; i < 8; i++) {
        celllight[i].style.backgroundColor="#cfcfcf";
        celllight[i].style.color="black";
    }
    var celltdlight = document.getElementById("table").getElementsByTagName("td");
    for (i = 0; i < 40; i++) {
        celltdlight[i].style.backgroundColor="#ebebeb";
        celltdlight[i].style.color="black";
    }
    var cellsidelight = document.getElementsByClassName("grey");
    for (i = 0; i < 5; i++) {
        cellsidelight[i].style.backgroundColor="#cfcfcf";
    }
    colorchange = false;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);  
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
