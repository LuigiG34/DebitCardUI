const tilt = $(".debit-card").tilt({
    maxTilt: 25,
    perspective: 1500,
    speed: 500,
    glare: true,
    maxGlare: 0.3
});

let debitCard = document.querySelector('.debit-card');
let paymentsText = document.querySelector('.word');
let body = document.querySelector('body');
let button = document.querySelector('.more');

button.addEventListener('click', () => {
    debitCard.classList.toggle('new-card');
    paymentsText.classList.toggle('new-payements');
    body.classList.toggle('new-bg');
    button.classList.toggle('new-btn');
})