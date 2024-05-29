document.getElementById('download-button').addEventListener('click', function() {
    const url = document.getElementById('youtube-url').value;
    const quality = document.getElementById('quality').value;

    if (url && quality) {
        fetch('https://primehere.pythonanywhere.com/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url, quality: quality })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const downloadUrl = `https://primehere.pythonanywhere.com/downloads/${data.file_name}`;
                window.location.href = downloadUrl;
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

document.getElementById('quality').addEventListener('change', function() {
    const url = document.getElementById('youtube-url').value;
    const quality = document.getElementById('quality').value;

    if (url) {
        fetch('https://primehere.pythonanywhere.com/get_size', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url, quality: quality })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('status').innerText = `Approx. size: ${data.size} MB`;
                document.getElementById('status').style.color = '#00796b';
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
    }
});
