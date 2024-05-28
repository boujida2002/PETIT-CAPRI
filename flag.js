function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}

function showContent() {
    document.getElementById('overlay').classList.add('visible');
    document.getElementById('content').classList.add('visible');
}

setTimeout(showContent, 2000);

//////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const backgroundElement = document.getElementById("image-background");
    const images = [
        "url('flag/Screenshot 2024-05-27 235601 (1).webp')",
        "url('flag/Screenshot 2024-05-27 235626.webp')",
        "url('flag/Screenshot 2024-05-27 235657 (1).webp')"
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
