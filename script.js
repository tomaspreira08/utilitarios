const body = document.body;
const changeBackgroundButton = document.getElementById('changeBackgroundButton');
let isDarkMode = false;

changeBackgroundButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.style.backgroundImage = 'url("https://i.pinimg.com/originals/f7/02/ff/f702ff9ffad64ab253c4512bcbf1797b.png")';
        body.style.color = '#ffffff'; // Define a cor do texto para branco no modo escuro
    } else {
        body.style.backgroundImage = 'url("https://c4.wallpaperflare.com/wallpaper/256/818/528/texture-textured-portrait-display-vertical-wallpaper-preview.jpg")';
        body.style.color = '#0e0d0d'; // Define a cor do texto para preto no modo claro
    }
});