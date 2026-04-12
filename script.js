// 🔍 SEARCH FUNCTION 
function searchProduct() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        let name = item.getAttribute("data-name").toLowerCase();
        item.style.display = name.includes(input) ? "block" : "none";
    });
}

// 📩 EMAILJS INIT
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("7W286mr81phD-iLLo");
});

// 📩 NEWSLETTER EMAIL
function sendEmail(e) {
    e.preventDefault();

    emailjs.send("service_rzf3nso", "template_j7abjjm", {
        user_email: document.getElementById("email").value
    })
    .then(() => {
        document.getElementById("msg").innerHTML = "✔ You are now subscribed!";
    })
    .catch(error => {
        document.getElementById("msg").innerHTML = "❌ Error: " + JSON.stringify(error);
    });
}

// 📩 CONTACT FORM EMAIL
function sendContact(e) {
    e.preventDefault();

    emailjs.send("service_rzf3nso", "template_j7abjjm", {
        name: document.getElementById("cname").value,
        email: document.getElementById("cemail").value,
        subject: document.getElementById("csubject").value,
        message: document.getElementById("cmessage").value
    })
    .then(() => {
        document.getElementById("contactMsg").innerHTML = "✔ Message Sent!";
    })
    .catch(err => {
        document.getElementById("contactMsg").innerHTML = "❌ Error sending message.";
    });
}

// 💬 WHATSAPP ORDER
function orderNow(product, price) {
    let phone = "+250794450903";
    let text = `Hello, I want to order:\n\nProduct: ${product}\nPrice: ${price} RWF`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}
