// Run immediately when script loads (body is still empty at this point)
// But wait for DOM to be ready before manipulating it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addContent);
} else {
  addContent();
}

function addContent() {
  // Create a heading element
  const heading = document.createElement('h1');
  
  // Set the text content
  heading.textContent = 'DOM load success';
  
  // Add it to the body
  document.body.appendChild(heading);
}