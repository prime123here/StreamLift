document.getElementById('download-button').addEventListener('click', function() {
    const url = document.getElementById('youtube-url').value;
    const quality = document.getElementById('quality').value;

    if (url && quality) {
        // In a real application, you would send these details to your backend server
        // which would handle the downloading. Here, we're just logging them.
        console.log(`URL: ${url}, Quality: ${quality}`);
        
        // Simulate download process (This won't actually download anything)
        alert('This is a static site. Integrate with a backend to enable downloads.');
    } else {
        alert('Please enter a valid URL and select a quality.');
    }
});
