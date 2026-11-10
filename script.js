
document.addEventListener('DOMContentLoaded', function() {
    
    const calcBtn = document.getElementById('calcBtn');
    const ticketCountInput = document.getElementById('ticketCount');
    const vipCheck = document.getElementById('vipCheck');
    const totalResult = document.getElementById('totalResult');

    const BASE_PRICE = 2500; // Базовая цена билета

    calcBtn.addEventListener('click', function() {
        // Получаем количество билетов
        let count = parseInt(ticketCountInput.value);
        
        // Проверка на некорректный ввод
        if (isNaN(count) || count < 1) {
            alert("Пожалуйста, введите корректное количество билетов (не менее 1).");
            return;
        }

        // Базовая стоимость
        let total = BASE_PRICE * count;

        // Если выбран VIP, добавляем 50%
        if (vipCheck.checked) {
            total = total * 1.5;
        }

        // Выводим результат, округляя до целого
        totalResult.textContent = Math.round(total);
    });
});





