//    the one i wrote without any help  

let inputBox = document.querySelector("#form2");
    let listContainer = document.querySelector(".list-group");
let addBtn = document.querySelector(".btn");

let completeNav = document.querySelector(".done");
let completedList = document.querySelector(".completed");
let allTask = document.querySelector(".all");
let allNav=document.querySelector(".all-nav")
    addBtn.addEventListener("click", () => {
        if (inputBox.value === '') {
            alert("write something");
        }
        else {
            listContainer.innerHTML += `<li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..."/>
            <span>${inputBox.value}</span>
            <a href="#!" class="text-danger" data-mdb-tooltip-init title="Delete todo"><i class="bi bi-trash ms-5 task-del"></i></a>
            <button type="button" class="btn btn-success ms-5 px-5 comp-btn">Completed</button>
        </li>
        ` 
            inputBox.value = '';
        }
        
    })

listContainer.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('comp-btn')) {

        // let taskitem = event.target.closest('li');
        completedList.innerHTML += listContainer.innerHTML;
        listContainer.innerHTML = '';
        let completedBtn = document.querySelector(".comp-btn");
        completedBtn.innerText = "Add Back To The List";
    //     let completedBtn = document.querySelector(".comp-btn");
    //     completedBtn.addEventListener('click', () => {

    //         completedList.innerHTML += listContainer.innerHTML;
    //         listContainer.innerHTML = '';
    //    })
    }
 
})
completedList.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('task-del')) {

        let taskitem = event.target.closest('li');
        if (taskitem) {
            taskitem.remove();
        }
    }

    if (event.target.classList.contains('comp-btn')) {
        
        
        // let taskitem = event.target.closest('li');

        listContainer.innerHTML += `${completedList.innerHTML}`;
        completedList.innerHTML = '';
        let completedBtn = document.querySelector(".comp-btn");
        completedBtn.innerText = "Completed";
    //     let completedBtn = document.querySelector(".comp-btn");
    //     completedBtn.addEventListener('click', () => {

    //         completedList.innerHTML += listContainer.innerHTML;
    //         listContainer.innerHTML = '';
    //    })
    }

})

listContainer.addEventListener('click', (event) => {
   
    if (event.target.classList.contains('task-del')) {
        let taskitem = event.target.closest('li');
        if (taskitem) {
            taskitem.remove();
        }
    }
    

})


completeNav.addEventListener('click', () => {
    allTask.classList.remove("show" ,"active")
    completedList.classList.add("show", "active")
    allNav.classList.remove("active")
    completeNav.classList.add("active")
})
allNav.addEventListener('click', () => {

    completedList.classList.remove("show", "active")
    allTask.classList.add("show", "active") 
    completeNav.classList.remove("active")
    allNav.classList.add("active")
})
// function del (){
//     listContainer.innerHTML = '';  
// }
