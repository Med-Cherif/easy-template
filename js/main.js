let myInput = document.querySelectorAll('input');
let them = [];

for (let i = 0; i < myInput.length; i++) {
    them.push(myInput[i]);
}
them.push(document.querySelector('textarea'));

for (let i = 0; i < them.length; i++) {
    them[i].onfocus = () => {
        them[i].setAttribute('data-placeholder', them[i].getAttribute('placeholder'));
        them[i].setAttribute('placeholder', '');
    }
    them[i].onblur = () => {
        them[i].setAttribute('placeholder', them[i].getAttribute('data-placeholder'));
        them[i].setAttribute('data-placeholder', '');
    }
}