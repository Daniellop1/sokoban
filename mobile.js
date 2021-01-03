navegador = navigator.userAgent;
moviles = ["Mobile", "iPhone", "iPod", "BlackBerry", "Opera Mini", "Sony", "MOT", "Nokia", "samsung"];
detector = 0;
for (i in moviles) {
    compruebo = navegador.indexOf(moviles[i]);
    if (compruebo > -1) {
        detector = 1;
    }
}
if (detector == 1) {
    location.href = "m.html";
}