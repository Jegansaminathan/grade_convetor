document.querySelector('.for').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var inpElm = document.getElementById('nam');
    var theval = inpElm.value;
    localStorage.setItem('username', theval);
    window.location.href = 'home.html';
});





