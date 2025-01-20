function generateLinks() {
    const linkContainers = document.querySelectorAll('.link-container');
    const links = [];

    linkContainers.forEach(container => {
        const name = container.querySelector('.link-name').value;
        const url = container.querySelector('.link-url').value;
        
        if (name && url) {
            links.push({ name, url });
        }
    });

    // Save to localStorage
    localStorage.setItem('userLinks', JSON.stringify(links));
    
    // Generate the public view
    window.location.href = 'view.html';
}

// Load saved links when page loads
window.onload = () => {
    const savedLinks = localStorage.getItem('userLinks');
    if (savedLinks) {
        const links = JSON.parse(savedLinks);
        // Populate the input fields
    }
}
