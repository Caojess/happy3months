// JavaScript for your website
// You can add interactive functionality here

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Example: Add a simple interaction
    const header = document.querySelector('h1');
    
    if (header) {
        header.addEventListener('click', function() {
            alert('Welcome to your website!');
        });
    }
});

// Add your custom JavaScript functions here
