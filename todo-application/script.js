const inputElement = document.getElementById('input');
const ulElement = document.getElementById('list');

let todoList = [];

inputElement.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.keyCode === 13){
        todoList.unshift({
            content: inputElement.value,
            done: false,
            selected: false
        })
        inputElement.value = ''

        upgradeView();
    }
});

// Функция создания ToDo
function upgradeView(){
    ulElement.innerHTML = ''

    for (let index = 0; index < todoList.length; index++) {
        const todoItem = todoList[index]

        const liElement = document.createElement('li');
        liElement.className = 'list-group-item';

        const divElement = document.createElement('div');
        divElement.className = 'form-group form-check';

        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.className = 'form-check-input';
        checkboxElement.id = 'todoItem' + index;
        checkboxElement.checked = todoItem.selected;
        checkboxElement.addEventListener('change', () => {
            todoItem.selected = checkboxElement.checked
        })

        const labelElement = document.createElement('label');
        labelElement.className = 'form-check-label';
        if (todoItem.done){
            labelElement.className += ' todoDone';
        }
        labelElement.setAttribute('for', 'todoItem' + index);
        labelElement.innerText = todoItem.content;

        const buttonDoneElement = document.createElement('button');
        buttonDoneElement.className = 'btn btn-primary';
        buttonDoneElement.type = 'button';
        buttonDoneElement.innerText = 'Выбрать';

        buttonDoneElement.addEventListener('click', () => {
            todoItem.done = !todoItem.done;
            upgradeView()
        })

        const buttonRemoveElement = document.createElement('button');
        buttonRemoveElement.className = 'btn btn-danger';
        buttonRemoveElement.type = 'button';
        buttonRemoveElement.innerText = 'Удалить';

        buttonRemoveElement.addEventListener('click', () => {
            // const todoItemIndex = todoList.indexOf(todoItem)
            // todoList.slice(todoItemIndex, todoItemIndex + 1)

            todoList = todoList.filter(currentTodoItem => currentTodoItem !== todoItem)

            upgradeView()
        })

        //Добавляем элементы в контейнер
        divElement.append(checkboxElement);
        divElement.append(labelElement);
        divElement.append(buttonDoneElement);
        divElement.append(buttonRemoveElement);
        liElement.append(divElement);
        ulElement.append(liElement);
    }
};

document.getElementById('doneAction').addEventListener('click', () => {
    for (const todoItem of todoList){
        if (todoItem.selected){
            todoItem.done = true;
            todoItem.selected = false;
        }
    }
    upgradeView()
})

document.getElementById('restoreAction').addEventListener('click', () => {
    for (const todoItem of todoList){
        if (todoItem.selected){
            todoItem.done = false;
            todoItem.selected = false;
        }
    }
    upgradeView()
})
document.getElementById('removeAction').addEventListener('click', () => {
    todoList = todoList.filter(todoItem => !todoItem.selected)
    upgradeView()
})

document.getElementById('test').addEventListener('click', () => {
    for (const todoItem of todoList){
            todoItem.selected = true;
    }
    upgradeView()
});