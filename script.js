// let inputBox = document.querySelector("#form2");
// let listContainer = document.querySelector(".list-group");
// let addBtn = document.querySelector(".btn");
// let completeNav = document.querySelector(".done");
// let completedList = document.querySelector(".completed");
// let allTask = document.querySelector(".all");
// let allNav = document.querySelector(".all-nav");

// showData();

// addBtn.addEventListener("click", () => {
//     if (inputBox.value === '') {
//         alert("write something");
//     } else {
//         listContainer.innerHTML += `<li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
//             <input class="form-check-input me-2" type="checkbox" value="" aria-label="..."/>
//             <span>${inputBox.value}</span>
//             <a href="#!" class="text-danger" data-mdb-tooltip-init title="Delete todo"><i class="bi bi-trash ms-5 task-del"></i></a>
//             <button type="button" class="btn btn-success ms-5 px-5 comp-btn">Completed</button>
//         </li>`;
      
//         inputBox.value = '';
//         saveData();
//     }
// });

// listContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('comp-btn')) {
//         let taskItem = event.target.closest('li');
//         if (taskItem) {
//             taskItem.querySelector('.comp-btn').innerText = "Add Back To The List";
//             completedList.appendChild(taskItem);
//             saveData();
//         }
//     }
//     if (event.target.classList.contains('task-del')) {
//         let taskItem = event.target.closest('li');
//         if (taskItem) {
//             taskItem.remove();
//             saveData();
//         }
//     }
// });

// completedList.addEventListener('click', (event) => {
//     if (event.target.classList.contains('task-del')) {
//         let taskItem = event.target.closest('li');
//         if (taskItem) {
//             taskItem.remove();
//             saveData();
//         }
//     }
//     if (event.target.classList.contains('comp-btn')) {
//         let taskItem = event.target.closest('li');
//         if (taskItem) {
//             taskItem.querySelector('.comp-btn').innerText = "Completed";
//             listContainer.appendChild(taskItem);
//             saveData();
//         }
//     }
// });

// completeNav.addEventListener('click', () => {
//     allTask.classList.remove("show", "active");
//     completedList.classList.add("show", "active");
//     allNav.classList.remove("active");
//     completeNav.classList.add("active");
// });

// allNav.addEventListener('click', () => {
//     completedList.classList.remove("show", "active");
//     allTask.classList.add("show", "active");
//     completeNav.classList.remove("active");
//     allNav.classList.add("active");
// });

// function saveData() {
//     localStorage.setItem("allData", listContainer.innerHTML);
//     localStorage.setItem("completedData", completedList.innerHTML);
// }

// function showData() {
//     const allData = localStorage.getItem("allData");
//     const completedData = localStorage.getItem("completedData");

//     if (allData) {
//         listContainer.innerHTML = allData;
//     }

//     if (completedData) {
//         completedList.innerHTML = completedData;
//     }
// }

let inputBox = document.querySelector("#form2");
let listContainer = document.querySelector(".list-group");
let addBtn = document.querySelector(".btn");
let completeNav = document.querySelector(".done");
let completedList = document.querySelector(".completed");
let allTask = document.querySelector(".all");
let allNav = document.querySelector(".all-nav");

showData();

addBtn.addEventListener("click", () => {
    if (inputBox.value === '') {
        alert("write something");
    } else {
        const taskHTML = `<li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..."/>
            <span>${inputBox.value}</span>
            <a href="#!" class="text-danger" data-mdb-tooltip-init title="Delete todo"><i class="bi bi-trash ms-5 task-del"></i></a>
            <button type="button" class="btn btn-success ms-5 px-5 comp-btn">Completed</button>
        </li>`;
        listContainer.innerHTML += taskHTML;
        inputBox.value = '';
        saveData();
    }
});

listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('comp-btn')) {
        let taskItem = event.target.closest('li');
        if (taskItem) {
            taskItem.querySelector('.comp-btn').innerText = "Add Back To The List";
            completedList.appendChild(taskItem);
            saveData();
        }
    }
    if (event.target.classList.contains('task-del')) {
        let taskItem = event.target.closest('li');
        if (taskItem) {
            taskItem.remove();
            saveData();
        }
    }
});

completedList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-del')) {
        let taskItem = event.target.closest('li');
        if (taskItem) {
            taskItem.remove();
            saveData();
        }
    }
    if (event.target.classList.contains('comp-btn')) {
        let taskItem = event.target.closest('li');
        if (taskItem) {
            taskItem.querySelector('.comp-btn').innerText = "Completed";
            listContainer.appendChild(taskItem);
            saveData();
        }
    }
});

completeNav.addEventListener('click', () => {
    allTask.classList.remove("show", "active");
    completedList.classList.add("show", "active");
    allNav.classList.remove("active");
    completeNav.classList.add("active");
});

allNav.addEventListener('click', () => {
    completedList.classList.remove("show", "active");
    allTask.classList.add("show", "active");
    completeNav.classList.remove("active");
    allNav.classList.add("active");
});



function saveData() {
    const allData = listContainer.innerHTML;
    const completedData = completedList.innerHTML;
    const data = { allData, completedData };
    localStorage.setItem("data", JSON.stringify(data));
}

function showData() {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        listContainer.innerHTML = data.allData || "";
        completedList.innerHTML = data.completedData || "";
    }
}
