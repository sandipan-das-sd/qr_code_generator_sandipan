document.addEventListener("DOMContentLoaded", function() {
    let imgborder = document.querySelector(".img-border");
    let qrimage = document.getElementById("qr-image");
    let qrtext = document.getElementById("qr-text");

    function generate_qr() {
        if (qrtext.value) {
            qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
            imgborder.style.display = "block";
            qrimage.style.display = "block";
            imgborder.style.textAlign = "center";
            qrimage.style.margin = "0 auto";
            alert("QR-Generated");
        } else {
            alert("Please enter any text to generate QR code.");
        }
    }

    // Call generate_qr function when the button is clicked
    document.querySelector('.generate-button button').addEventListener('click', generate_qr);

    // Download functionality
    document.getElementById("downloadBtn").addEventListener("click", function() {
        if (qrimage.src && qrimage.src !== "") {
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function() {
                let a = document.createElement('a');
                a.href = window.URL.createObjectURL(xhr.response);
                a.download = "qr-code.png";
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(a.href);
                document.body.removeChild(a);
            };
            xhr.open('GET', qrimage.src);
            xhr.send();
        } else {
            alert("Please generate a QR code before downloading.");
        }
    });
});
const sr=ScrollReveal({
    distance:'450px',
    duration:2600,
    delay:450,
    reset:true
})
sr.reveal('.main',{delay:200,origin:'right'});