let buttons = document.querySelectorAll('.nums button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let number = parseInt(this.textContent);
        
        if (number % 2 === 0) {
            this.classList.add('green');
            this.classList.remove('red');
        } else {
            this.classList.add('red');
            this.classList.remove('green');
        }
    });
});
