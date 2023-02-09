const input = document.getElementById('input');
const button = document.getElementById('button');
const taskList = document.getElementById('taskList');

function addTask(value){
    const task = document.createElement('li');
    task.innerText = value;
    taskList.appendChild(task);
}

function submitTask(value){
    if(!value) return;
    if (!value.trim()) return;

    addTask(value);
    input.value='';
}

input.addEventListener('keyup', function({ key }){
    if (key !== 'Enter') return;
    event.preventDefault;

    const { value } = input;
    submitTask(value);
});

button.addEventListener('click', function(){
    const { value } = input;
    submitTask(value);
});