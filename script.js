//

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');

    let form = document.querySelector('form');
    let submitButton = document.querySelector('#submit-button');
    let card = document.querySelector('#card');
    let cardTitle = document.querySelector('#card-title');
    let annual;

    let instances = M.Parallax.init(elems, {});

    submitButton.addEventListener('click', () => {
        let salary = (form['salary'].value).trim();
        let months = (form['months'].value).trim();
        let percent = (form['percent'].value).trim();
        annual = (salary * months) * (percent / 100);
        if (isNaN(annual)) {
            M.toast({html: 'Введите только числа'});
        } else {
            card.style.display = 'block';
            cardTitle.innerText = annual + ' рублей';
        }

    })
});