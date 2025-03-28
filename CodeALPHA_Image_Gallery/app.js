let currentImageIndex = 0;
let imageSources = [];

function openLightbox(src) {
    imageSources = [];
    let images = document.querySelectorAll('.gallery img');
    images.forEach((img) => {
        imageSources.push(img.src);
    });

    currentImageIndex = imageSources.indexOf(src);
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('show-all-btn').style.display = 'none';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.getElementById('gallery').style.display = 'flex';
    document.getElementById('show-all-btn').style.display = 'block';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    document.getElementById('lightbox-img').src = imageSources[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    document.getElementById('lightbox-img').src = imageSources[currentImageIndex];
}

function goBack() {
    closeLightbox();
}

document.getElementById('show-all-btn').addEventListener('click', function() {
    document.getElementById('gallery').style.display = 'flex';
    this.style.display = 'none';
});

function searchImages() {
    let searchValue = document.getElementById('search').value.toLowerCase();
    let images = document.querySelectorAll('.gallery img');
    
    images.forEach((img) => {
        let imgAlt = img.alt.toLowerCase();
        if (imgAlt.includes(searchValue)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = '🌙 Dark Mode';
darkModeBtn.id = 'dark-mode-btn';
darkModeBtn.style.position = 'absolute';
darkModeBtn.style.top = '10px';
darkModeBtn.style.right = '10px';
darkModeBtn.style.padding = '10px';
darkModeBtn.style.background = '#333';
darkModeBtn.style.color = 'white';
darkModeBtn.style.border = 'none';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.style.borderRadius = '5px';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
