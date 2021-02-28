// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4



const categoriesE = document.querySelectorAll('.item')

console.log(`в списке ${categoriesE.length} категории`)

const categoriesElArr = [...categoriesE]
    .map(item => `${item.children[0].textContent} ${item.children[1].children.length}-категории`)
    .join('\n')

console.log(categoriesElArr)