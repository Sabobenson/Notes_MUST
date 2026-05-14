// document.addEventListener("DOMContentLoaded", () => {
//  const taskInput = document.querySelector("#input-task");
//  const addButtonTask = document.querySelector("#add-task");
//  const taskList = document.querySelector("#task-list");

//  //Load tasks from local storage
//  loadTask();

//  //Add task event
//  addButtonTask.addEventListener('click', addTask);
//  taskInput.addEventListener('keypress', (e) => {
//     if(e.key === 'Enter') addTask();
//  });

//     //Add task function 
//     function addTask() {
//         const taskText = taskInput.value.trim();
//         if(taskText != ''){
//             const taskItem = createTaskItem(taskText);
//             taskList.appendChild(taskItem);
//             saveTask();
//             taskInput.value = '';
//         }
//     }

//     //Create task item
//   function createTaskItem(taskText) {
//     const li = document.createElement('li');
//     li.className = 'task-item';

//     const span = document.createElement('span');
//     span.textContent = taskText;
//     li.appendChild(span);

//     const completeButton = document.createElement('input');
//     completeButton.type = 'checkbox';
//     completeButton.addEventListener('change', toggleComplete);
//     li.appendChild(completeButton);

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', deleteTask);
//     li.appendChild(deleteButton);

//     return li;
//   } 

//   //Toggle complete button
//   function toggleComplete(){
//     this.parentElement.classList.toggle('complete');
//     saveTask();
//   }

// //Delete task
// function deleteTask(){
//    this.parentElement.remove();
//    saveTask();
// }

// //function to save tasks
// function saveTask(){
//     const tasks = [];
//     document.querySelectorAll('.task-item').forEach((taskItem) => {
//     tasks.push({
//         text: taskItem.firstChild.textContent,
//         completed: taskItem.classList.contains('completed')
//     });         
//     });
//     localStorage.setItems('tasks', JSON.stringify(tasks));
// }

// //Load tasks from local storage
// function loadTask() {
//     const tasks = JSON.parse(localStorage.getItem('tasks'));
//     if(tasks){
//         tasks.forEach((task) => {
//             const taskItem = createTaskItem(task.text);
//             if (task.completed){
//                 taskItem.classList.add('completed');
//                 taskItem.querySelector('input').checked = true;
//             }
//             taskList.appendChild(taskItem);
//         });
//     }
// }
// })


const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
 if(inputBox.value === '') {
    alert('Please enter a task');
 } else {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
 
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }
   inputBox.value = '';
   saveTask();
};

inputBox.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') addTask();
});

listContainer.addEventListener('click', (e) =>{
if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveTask();
} 
else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveTask();
}
}
, false);

const saveTask = () => {
 localStorage.setItem('data', listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
};

showTask();