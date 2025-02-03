// Variables to store selected choices
let selectedAnimal = '';
let selectedFlower = '';
let selectedMascot = '';

// Get all pages
const welcomePage = document.getElementById('welcome-page');
const flowerPage = document.getElementById('flower-page');
const mascotPage = document.getElementById('mascot-page');
const finalPage = document.getElementById('final-page');

// Function to handle image selection
function handleSelection(event, nextPage) {
  const selectedImage = event.target;
  const choice = selectedImage.getAttribute('data-choice');

  // Save the choice based on the current page
  if (welcomePage.classList.contains('hidden') === false) {
    selectedAnimal = choice;
  } else if (flowerPage.classList.contains('hidden') === false) {
    selectedFlower = choice;
  } else if (mascotPage.classList.contains('hidden') === false) {
    selectedMascot = choice;
  }

  // Move to the next page
  document.querySelector('.page:not(.hidden)').classList.add('hidden');
  nextPage.classList.remove('hidden');

  // If it's the final page, load images and create hearts
  if (nextPage === finalPage) {
    loadImages();
    createHearts();

    // Play music
    const music = document.getElementById('background-music');
    music.play();

    // Shoot confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Function to load multiple images for each selection
function loadImages() {
  const animalImages = document.querySelectorAll('.animal-image');
  const flowerImages = document.querySelectorAll('.flower-image');
  const mascotImages = document.querySelectorAll('.mascot-image');

  // Load animal images
  animalImages.forEach((img, index) => {
    img.src = `${selectedAnimal}-${index + 1}.jpg`;
  });

  // Load flower images
  flowerImages.forEach((img, index) => {
    img.src = `${selectedFlower}-${index + 1}.jpg`;
  });

  // Load mascot images
  mascotImages.forEach((img, index) => {
    img.src = `${selectedMascot}-${index + 1}.jpg`;
  });
}

// Function to create 100 hearts
function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 8}s`; // Slower hearts
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heartsContainer.appendChild(heart);
  }
}

// Add event listeners to all images
document.querySelectorAll('.options img').forEach((img) => {
  img.addEventListener('click', (event) => {
    if (welcomePage.classList.contains('hidden') === false) {
      handleSelection(event, flowerPage);
    } else if (flowerPage.classList.contains('hidden') === false) {
      handleSelection(event, mascotPage);
    } else if (mascotPage.classList.contains('hidden') === false) {
      handleSelection(event, finalPage);
    }
  });
});