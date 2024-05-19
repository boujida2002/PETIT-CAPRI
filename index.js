var modalIndex = 0;
    var modalImages = [];
    var thumbnailsContainer = document.querySelector('.thumbnails');
  
    function openModal(images) {
      modalImages = images;
      modalIndex = 0;
      showImage();
      document.getElementById('myModal').style.display = "block";
      displayThumbnails();
    }
  
    function closeModal() {
      document.getElementById('myModal').style.display = "none";
    }
  
    function plusSlides(n) {
      modalIndex += n;
      if (modalIndex >= modalImages.length) {
        modalIndex = 0;
      } else if (modalIndex < 0) {
        modalIndex = modalImages.length - 1;
      }
      showImage();
    }
  
    function showImage() {
      var modalImg = document.getElementById("modalImg");
      modalImg.src = modalImages[modalIndex];
    }
  
    // Function to display thumbnails
    function displayThumbnails() {
      thumbnailsContainer.innerHTML = '';
      modalImages.forEach(function(imageSrc, index) {
        var thumbnail = document.createElement('img');
        thumbnail.src = imageSrc;
        thumbnail.alt = 'Thumbnail ' + (index + 1);
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = function() {
          modalIndex = index;
          showImage();
        };
        thumbnailsContainer.appendChild(thumbnail);
      });
    }
/////////////////////////
var modalIndex = 0;
var modalItems = [];
var thumbnailsContainer = document.querySelector('.thumbnails');

function openModal(items) {
    modalItems = items;
    modalIndex = 0;
    showImage();
    document.getElementById('myModal').style.display = "block";
    displayThumbnails();
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

function plusSlides(n) {
    modalIndex += n;
    if (modalIndex >= modalItems.length) {
        modalIndex = 0;
    } else if (modalIndex < 0) {
        modalIndex = modalItems.length - 1;
    }
    showImage();
}

function showImage() {
    var modalImg = document.getElementById("modalImg");
    var modalName = document.getElementById("modalName");
    var modalPrice1 = document.getElementById("modalPrice1");
    var modalPrice2 = document.getElementById("modalPrice2");
    
    modalImg.src = modalItems[modalIndex].src;
    modalName.textContent = modalItems[modalIndex].name;
    modalPrice1.textContent = modalItems[modalIndex].price1;
    modalPrice2.textContent = modalItems[modalIndex].price2;
}

// Function to display thumbnails
function displayThumbnails() {
    thumbnailsContainer.innerHTML = '';
    modalItems.forEach(function(item, index) {
        var thumbnail = document.createElement('img');
        thumbnail.src = item.src;
        thumbnail.alt = 'Thumbnail ' + (index + 1);
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = function() {
            modalIndex = index;
            showImage();
        };
        thumbnailsContainer.appendChild(thumbnail);
    });
}
