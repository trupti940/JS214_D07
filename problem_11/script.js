const imageUrls = [
    'https://pic-bstarstatic.akamaized.net/ugc/b0512a55a341fe9948d45cc59411e1f3be2fa441.png',
    'https://m.media-amazon.com/images/I/41QOcSP2nBL._AC_UF1000,1000_QL80_.jpg',
    'https://i.ytimg.com/vi/9-zq4UwnmGQ/maxresdefault.jpg'
];
const slideshowImage = document.getElementById('slideshow-image');
let currentIndex = 0;
let interval;
let isPlaying = false;

function showImage(index) {
    if (index >= 0 && index < imageUrls.length) {
        slideshowImage.src = imageUrls[index];
        currentIndex = index;
    } else if (index >= imageUrls.length) {
        currentIndex = 0;
        showImage(currentIndex);
    }
}

function startSlideshow() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        showImage(currentIndex);
    }, 2000); // 2000ms = 2 seconds
}

function stopSlideshow() {
    clearInterval(interval);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    stopSlideshow();
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    showImage(currentIndex);
    if (isPlaying) startSlideshow();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    stopSlideshow();
    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage(currentIndex);
    if (isPlaying) startSlideshow();
});

document.getElementById('playPauseBtn').addEventListener('click', () => {
    if (isPlaying) {
        stopSlideshow();
        document.getElementById('playPauseBtn').textContent = 'Play';
    } else {
        startSlideshow();
        document.getElementById('playPauseBtn').textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

document.getElementById('addImageBtn').addEventListener('click', () => {
    const url = document.getElementById('imageUrl').value;
    const position = parseInt(document.getElementById('position').value, 10);
    if (url && !isNaN(position) && position >= 0 && position <= imageUrls.length) {
        imageUrls.splice(position, 0, url);
        showImage(currentIndex);
    }
    document.getElementById('imageUrl').value = '';
    document.getElementById('position').value = '';
});


showImage(currentIndex);
startSlideshow();
