// Variables to store selected choices
let selectedAnimal = '';
let selectedVehicle = '';
let selectedNature = '';

// Get all pages
const welcomePage = document.getElementById('welcome-page');
const vehiclePage = document.getElementById('vehicle-page');
const naturePage = document.getElementById('nature-page');
const finalPage = document.getElementById('final-page');

// Function to handle image selection
function handleSelection(event, nextPage) {
  const selectedImage = event.target;
  const choice = selectedImage.getAttribute('data-choice');

  // Save the choice based on the current page
  if (welcomePage.classList.contains('hidden') === false) {
    selectedAnimal = choice;
  } else if (vehiclePage.classList.contains('hidden') === false) {
    selectedVehicle = choice;
  } else if (naturePage.classList.contains('hidden') === false) {
    selectedNature = choice;
  }

  // Move to the next page
  document.querySelector('.page:not(.hidden)').classList.add('hidden');
  nextPage.classList.remove('hidden');

  // If it's the final page, display all selected images
  if (nextPage === finalPage) {
    document.getElementById('selected-animal').src = `${selectedAnimal}.jpg`;
    document.getElementById('selected-vehicle').src = `${selectedVehicle}.jpg`;
    document.getElementById('selected-nature').src = `${selectedNature}.jpg`;
  }
}

// Add event listeners to all images
document.querySelectorAll('.options img').forEach((img) => {
  img.addEventListener('click', (event) => {
    if (welcomePage.classList.contains('hidden') === false) {
      handleSelection(event, vehiclePage);
    } else if (vehiclePage.classList.contains('hidden') === false) {
      handleSelection(event, naturePage);
    } else if (naturePage.classList.contains('hidden') === false) {
      handleSelection(event, finalPage);
    }
  });
});