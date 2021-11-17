const tInput = document.querySelector('#task_input');
const tButton = document.querySelector('#input_wrapper>button');
const tToDoListUL = document.querySelector('#todo_list>ul');

tButton.addEventListener('click', addNewTask);

let idSequence = 0;
function addNewTask() {
    tToDoListUL.innerHTML = tToDoListUL.innerHTML +
        `<li>
          <input id="${idSequence}" type="checkbox" name="list_item" />
          <label for="${idSequence++}" class="list_content">${tInput.value}</label>          
          <a href="#" onclick="deleteTaskItem(this)"><span class="glyphicon">&#xe020;</span></a>
        </li>`;

    tInput.value = '';
}

function deleteTaskItem(aTag) {
    aTag.parentNode.remove();
}