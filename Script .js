document.addEventListener("DOMContentLoaded", function() {
    let bookBtn = document.querySelectorAll(".btn");
    bookBtn.forEach(btn => {
        btn.addEventListener("click", function() {
            alert("Booking feature coming soon!");
        });
    });
});
