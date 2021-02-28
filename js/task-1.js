
const categoriesE = document.querySelectorAll('.item')

console.log(`в списке ${categoriesE.length} категории`)

const categoriesElArr = [...categoriesE]
    .map(item => `${item.children[0].textContent} ${item.children[1].children.length}-категории`)
    .join('\n')

console.log(categoriesElArr)