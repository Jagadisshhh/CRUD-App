const inputTask= document.querySelector('input');
// const addBtn = document.querySelector('#addBtn');
const formSub = document.querySelector('#form');
const uls = document.querySelector('ul');
const listItemDivs = document.querySelector('#listItem');
// const listInput = document.querySelector('#listInput');
const editBtns = document.querySelector('#edit')
const deleteBtns= document.querySelector('#delete')



let task = '';
let count=0;

formSub.addEventListener('submit', function(e) {
    e.preventDefault();
    task = inputTask.value;
    if(task==""){
        alert("Please Enter a todo");
    }
    else{
    inputBox.value = '';
    addTask();
}
})

addTask = () => {
count+=1;
const divs = document.createElement('div');
divs.id = `${count}`;
divs.className = "listItem";
const listInput = document.createElement('input');
listInput.type ='text';
listInput.value = task;
// listInput.classList.add="listInput1";
const newEdit = document.createElement('button');
newEdit.className = "edit listStyle";
const newDelete = document.createElement('button');
newDelete.className = "delete listStyle";
newDelete.id =`${count}`;
newDelete.addEventListener("click",function(e){
    // divs.id = `${count}`;
    // console.log(e.target.id);
    Deletetodo(e.target.id);
})
newEdit.innerText = 'Edit';
newDelete.innerText = 'Delete';

newEdit.addEventListener('click', function () {
    if(newEdit.innerText.toLowerCase() === 'edit'){
        newEdit.innerText = 'Save';
        listInput.removeAttribute('readonly');
        listInput.focus();
    }
    else {
        newEdit.innerText = 'Edit';
        listInput.setAttribute('readonly','readonly');
    }
})
divs.append(listInput);
divs.append(newEdit);
divs.append(newDelete);
uls.append(divs);
}

function Deletetodo(id){
    // console.log(id);
    document.getElementById(id).remove();
}

// variableId = () => {
    
// }







