
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counter = {

     btnDncrement: document.querySelector('[data-action="decrement"]'),

     btnIecrement: document.querySelector('[data-action="increment"]'),

    spanValue: document.querySelector('#value'),

};

let counterValue = 0;

const increment = () => { 
    counterValue += 1;
    counter.spanValue.textContent = counterValue;
};

const decrement = () => { 
    counterValue -= 1;
    counter.spanValue.textContent = counterValue;
};

counter.btnDncrement.addEventListener('click', decrement);

counter.btnIecrement.addEventListener('click',increment);









