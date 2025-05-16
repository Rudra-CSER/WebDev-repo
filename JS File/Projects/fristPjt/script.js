const buttons = document.querySelectorAll('.button');
//we selecetd all btns 

const body = document.querySelector('body');
//const to store all body 


buttons.forEach(button => {
    button.addEventListener('click', event => {
        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
        }
    });
});

buttons.forEach(buttons => {
  buttons.style.cursor = 'pointer';
});

