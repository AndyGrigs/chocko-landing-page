
// Open the modal
document.getElementById("write-comment").addEventListener("click", function () {
    document.getElementById("comment-modal").style.display = "block";
  });

  // Close the modal
  document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("comment-modal").style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("comment-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle form submission
  document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your comment has been submitted!");
    document.getElementById("comment-modal").style.display = "none";
  });