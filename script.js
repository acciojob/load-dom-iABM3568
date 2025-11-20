// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create a heading element
  const heading = document.createElement('h1');
  
  // Set the text content
  heading.textContent = 'DOM load success';
  
  // Add it to the body
  document.body.appendChild(heading);
});