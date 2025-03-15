function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById("contactform").addEventListener('submit', function(event) {
            event.preventDefault();  
            alert("Thank you for your message!"); 
            document.getElementById("contactform").reset();  
        });
    });




