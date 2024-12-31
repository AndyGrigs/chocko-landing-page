// Get modal, close button, and buttons that open the modal
const modal = document.getElementById('comment-modal');
const closeModal = document.getElementById('close-modal');
const openButtons = document.querySelectorAll('.reviews-btn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block'; // Ensure the modal is visible
  setTimeout(() => {
    modal.style.opacity = '1'; // Gradually increase opacity
  }, 10); // Slight delay to allow the transition to work
}

// Function to close the modal
function closeModalHandler() {
  modal.style.opacity = '0'; // Gradually decrease opacity
  setTimeout(() => {
    modal.style.display = 'none'; // Hide the modal after the transition ends
  }, 300); // Match the duration of the CSS transition
}

// Add event listeners to all buttons that open the modal
openButtons.forEach((button) => {
  button.addEventListener('click', openModal);
});

// Add event listener to the close button
closeModal.addEventListener('click', closeModalHandler);

// Close modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalHandler();
  }
});
