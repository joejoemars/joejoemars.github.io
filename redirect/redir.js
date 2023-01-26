var inter, milliseconds

function onLoad() {

    if (new URLSearchParams(location.search).has('time')) {
    
        milliseconds = new URLSearchParams(location.search).get('time');
    
    } else {
    
        milliseconds = 10000;
    
    };

    document.getElementById("D80dxRK9").innerHTML = milliseconds / 1000;

    if (inter == null) {

        inter = window.setInterval(updateGeneral,100);

    }

    //alert("Document Loaded")

}

function updateGeneral() {

    document.getElementById("tGXyMg7i").innerHTML = milliseconds / 1000;

    milliseconds -= 100;

    if (milliseconds == 0) {

        window.clearInterval(inter);

        window.location.replace("/");

    }

}

function stopInterval() {

    window.clearInterval(inter)

    alert("Interval (" + inter + ") stopped")

}