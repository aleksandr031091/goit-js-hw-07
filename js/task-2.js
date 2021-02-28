
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsArr = ingredients.map(el => {

  const intagrationLink = document.createElement('li')
    
        intagrationLink.textContent = el;
        
        return intagrationLink;
});

const intagrationList = document.querySelector('#ingredients')

intagrationList.append(...ingredientsArr)

console.log(intagrationList);


// const makeLi = options => {
    
//     return options.map(option => {
        
//         const intagrationLink = document.createElement('li')
    
//         intagrationLink.textContent = option;

//         return intagrationLink;
//     })
  
// };

// const arrLi = makeLi(ingredients);

// intagrationList.append(...arrLi)

// console.log(intagrationList);
// //  console.log(arrLi);









