// Обработчик формы обратной связи
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Останавливаем стандартную отправку формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Спасибо за сообщение, ' + name + '! Мы свяжемся с вами по электронной почте: ' + email);
        document.querySelector('form').reset();  // Очищаем форму после отправки
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Прокрутка к секции при клике на меню
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
