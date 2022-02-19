function calculate(){
    var p = 0;
    var n = 0;
    var r = 0;

    p = parseInt(document.getElementById("Principal").value);
    n = parseInt(document.getElementById("Years").value);
    r = parseInt(document.getElementById("Rate of interest").value);

    SI = (p*n*r)/100;
    document.getElementById("res").innerHTML = SI
}