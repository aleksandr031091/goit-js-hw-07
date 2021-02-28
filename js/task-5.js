// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.

// Если инпут пустой, в спане должна отображаться строка 'незнакомец'

const refs = {

    input: document.querySelector('#name-input'),

    span: document.querySelector('#name-output'),
};

const outPutChange = () => { 
    if (refs.input.value === '') { 
        refs.span.innerHTML = 'незнакомец'
    } else (refs.span.innerHTML = refs.input.value)
    
};

refs.input.addEventListener('input',outPutChange);