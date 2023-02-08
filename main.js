const myForm= document.querySelector('#my-form');
const tekst= document.querySelector('#txtbox');
const tasks= document.querySelector('#tasks');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(tekst.value !== ''){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${tekst.value}`));
    tasks.appendChild(li);
    tekst.value='';
}
}
