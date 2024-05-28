function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function showContent() {
    document.getElementById('overlay').classList.add('visible');
    document.getElementById('image-background').classList.add('visible');
}

setTimeout(showContent, 2000);

//////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const backgroundElement = document.getElementById("image-background");
    const images = [
        "url('flag/1ea4e62a-6c2c-4022-b087-ef3a15b43c9b.jpg')",
        "url('flag/05b0e606-763c-40e4-9822-9ea03340319c.jpg')",
        "url('flag/05b0e606-763c-40e4-9822-9ea03340319c.jpg')"
     
        // Ajoutez autant d'images que nécessaire
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        backgroundElement.style.backgroundImage = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initialisation
    changeBackgroundImage();
    setInterval(changeBackgroundImage, 5000); // Change l'image de fond toutes les secondes
});

function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}
