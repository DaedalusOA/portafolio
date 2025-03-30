document.getElementById('contactme').addEventListener('click', function () {

    // Copy the text to the clipboard
    navigator.clipboard.writeText("diegochoarteaga@gmail.com").then(() => {
        alert('email not available copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});
