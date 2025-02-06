// Review System
function showReviewForm(productName) {
  const reviewForm = document.getElementById("review-form");
  const productNameInput = document.getElementById("product-name");
  productNameInput.value = productName;
  reviewForm.style.display = "block";
}

function hideReviewForm() {
  const reviewForm = document.getElementById("review-form");
  reviewForm.style.display = "none";
}

function submitReview(event) {
  event.preventDefault();

  const productName = document.getElementById("product-name").value;
  const reviewerName = document.getElementById("reviewer-name").value;
  const reviewText = document.getElementById("review-text").value;

  if (!productName || !reviewerName || !reviewText) {
    alert("Please fill out all fields.");
    return;
  }

  // Add the review to the product's review list
  const reviewsList = document.getElementById(`${productName}-reviews`).querySelector("ul");
  const newReview = document.createElement("li");
  newReview.textContent = `"${reviewText}" - ${reviewerName}`;
  reviewsList.appendChild(newReview);

  // Clear the form and hide it
  document.getElementById("reviewer-name").value = "";
  document.getElementById("review-text").value = "";
  hideReviewForm();
}