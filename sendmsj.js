(function() {
    emailjs.init("X-Xnxa9y3KvO33swW"); // Reemplaza con tu User ID de EmailJS
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        mobile: formData.get('mobile'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    };

    emailjs.send("service_8yoauw9", "template_zcfar6p", data)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Mensaje enviado exitosamente.");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Error al enviar el mensaje.");
        });
});