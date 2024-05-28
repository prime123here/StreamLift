document.getElementById('download-button').addEventListener('click', function() {
    const url = document.getElementById('youtube-url').value;
    const quality = document.getElementById('quality').value;

    if (url && quality) {
        fetch('https://primehere.pythonanywhere.com/download', {  // Update this line
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url, quality: quality })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const link = document.createElement('a');
                link.href = data.file_path;
                link.download = data.file_name;
                link.click();
                document.getElementById('status').innerText = 'Download started!';
                document.getElementById('status').style.color = '#388e3c';
            } else {
                document.getElementById('status').innerText = 'Error: ' + data.error;
                document.getElementById('status').style.color = '#d32f2f';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('status').innerText = 'Error: ' + error.message;
            document.getElementById('status').style.color = '#d32f2f';
        });
    } else {
        alert('Please enter a valid URL and select a quality.');
    }
});
