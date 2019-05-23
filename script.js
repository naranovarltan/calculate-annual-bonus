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
        let salary = form['salary'].value;
        let months = form['months'].value;
        let percent = form['percent'].value;
        try {
            annual = (salary * months) * (percent/100);
        } catch (e) {
            debugger
        }
        if (isNaN(annual)) {
            M.toast({html: 'Введите числа'});
        } else {
            card.style.display = 'block';
            cardTitle.innerText = annual + ' рублей';
        }

    })
});