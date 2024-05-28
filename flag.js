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
        "url('flag/WhatsApp Image 2024-05-28 at 12.16.55 PM.webp')",
        "url('flag/WhatsApp Image 2024-05-28 at 12.16.56 PM (1).webp')",
        "url('flag/WhatsApp Image 2024-05-28 at 12.16.56 PM (2).webp')",
         "url('flag/WhatsApp Image 2024-05-28 at 12.16.56 PM (3).webp')",
         "url('flag/WhatsApp Image 2024-05-28 at 12.16.56 PM.webp')"
     
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
