
Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.


const refs = {

    input: document.querySelector('input[type="number"]')

    btnRender: document.querySelector('[data-action="render"]')

    btnDestroy: document.querySelector('[data-action="destroy"]')

    divBoxes: document.querySelector('#boxes')

};

const createBoxes = (amount) => {

    for (let i = 0; i < amount.lengt; i += 1) {

        i = 

    }
        

    refs.divBoxes = `<div></div>`

};

