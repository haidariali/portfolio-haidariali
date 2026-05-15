
function scrollToTop() {
    document.getElementById("div3Explain").scrollTop = 0;
}

/* klanten pagina script */

document.getElementById('revieuwFormullier').addEventListener('submit', function (event) {
    event.preventDefault();

    const naam = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const komentaar = document.getElementById('comment').value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    reviewItem.innerHTML = `
        <p><strong>${naam}</strong></p>
        <p class="stars">Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
        <p>${komentaar}</p>
    `;

    document.getElementById('revieuwLijsten').appendChild(reviewItem);

    document.getElementById('revieuwFormullier').reset();
});

