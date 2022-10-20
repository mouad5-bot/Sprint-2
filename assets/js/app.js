/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
 var id = 18;
 let toDoCount = 0;
 let inProgressCount = 0;
 let doneCount = 0;
 reloadTasks()
function createTask() {
    // initialiser task form
    let task= {
        id          : id ++,
        title       : document.getElementById("Title").value,
        type        : document.querySelector('input[type="radio"]:checked').value,
        priority    : document.getElementById("selectPriority").value,
        status      : document.getElementById("selectStatus").value,
        date        : document.getElementById("date").value,
        description : document.getElementById("description").value
    };
    
    document.getElementById("closeAlert").click()   //c'est pour fermer l'alert de formulaire


    // Afficher le boutton save
    console.log(task) 

    // Ouvrir modal form
   
    if (task.status == "To Do") {
        document.getElementById("to-do-tasks-count").innerHTML = ++toDoCount;
        document.getElementById("to-do-tasks").innerHTML +=  //si on met = le contenu de todo va changer et remplacer par le neaveau ifo
        `
        <button class="w-100  d-flex bg-white border border-white">
        <div class=" col-1  text-start text-success">
            <i class="bi bi-question-circle"></i>
        </div>
        <div class="col-11 text-start">
            <div class="h6"> ${task.title} </div>
            <div class="">
                <div class="text-secondary">#${task.id} created in ${task.date}</div>
                <div class="fs-6" title="There is hardly anything more frustrating than having
                    to look for current requirements in tens of comments under the actual description
                    or having to decide which commenter is actually authorized to change the requirements.
                    The goal here is to keep all the up-to-date requirements and details in 
                    the main/primary description of a task. Even though the information in comments
                    may affect initial criteria, 
                    just update this primary description accordingly.">${task.description}
                </div>
            </div>
            <div class="mt-2 ">
                <span class="p-1 btn btn-primary">High</span>
                <span class="p-1 btn btn-secondary">Feature</span>
                <span class="p-1 btn btn-info">modify</span>
                <span class="p-1 btn btn-danger onclick='deleteTask()'">delete</span>
            </div>
        </div>
        </button>
        <hr class="border border-gray border-1 opacity-50">`
    } else if (task.status == "In Progress") {
        document.getElementById("in-progress-tasks-count").innerHTML = ++inProgressCount;
        document.getElementById("in-progress-tasks").innerHTML +=  
        `
        <button class="w-100  d-flex bg-white border border-white">
            <div class="col-1  text-start text-success">
                <i class="bi bi-arrow-clockwise"></i>
            </div>
            <div class="col-11 text-start">
                <div class="h6">${task.title}</div>
                <div class="">
                    <div class="">#${task.id} created in ${task.date}</div>
                    <div class="" title="to the affected account and services if possible. 
                    It might be hard to reproduce the exact environment on a local machine.">
                    ${task.description}</div>
                </div>
                <div class="mt-2">
                    <span class="p-1 btn btn-primary">High</span>
                    <span class="p-1 btn btn-secondary">Feature</span>
                    <span class="p-1 btn btn-info">modify</span>
                    <span class="p-1 btn btn-danger onclick='deleteTask()'">delete</span>
                </div>
            </div>
        </button>
        <hr class="border border-gray border-1 opacity-50">`
        
    }else {
        document.getElementById("done-tasks-count").innerHTML = ++doneCount;
        document.getElementById("done-tasks").innerHTML +=  
        `
        <button class="w-100  d-flex bg-white border border-white">
            <div class="col-1  text-start text-success">
                <i class="bi bi-check-circle"></i>
            </div>
            <div class="col-11 text-start">
                <div class="h6">${task.title}</div>
                <div class="">
                    <div class="">#${task.id} created in ${task.date}</div>
                    <div class="" title="If it is possible and when it does not violate security policies, 
                    it is usually helpful for the developer to access the original data that might have 
                    played a role in the problem.">${task.description}</div>
                </div>
                <div class="mt-2">
                    <span class="p-1 btn btn-primary">High</span>
                    <span class="p-1 btn btn-secondary">Feature</span>
                    <span class="p-1 btn btn-info">modify</span>
                    <span class="p-1 btn btn-danger onclick='deleteTask()'">delete</span> 
                </div>
                <button class="btn btn-info">Supreme</button>
            </div>
        </button>
        <hr class="border border-gray border-1 opacity-50">`
    }
  
    document.getElementById("closeAlert").click()   //c'est pour fermer l'alert de formulaire
    swal({
        title: "Good !",
        text: "You added succesfly!",
        icon: "success",
        button: "OK!",
      }); 
      console.log(tasks);
    
}  
     

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
}

function editTask(index) {

    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
    })
    // Remove task from array by index splice function
    
    let supp =  tasks.splice (id - 18, 1)

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    
    // Remove tasks elements
    
    // Set Task count
    for( let task of tasks){
        if (task.status == "To Do") {
            document.getElementById("to-do-tasks-count").innerHTML = ++toDoCount;
            document.getElementById("to-do-tasks").innerHTML +=  //si on met = le contenu de todo va changer et remplacer par le neaveau ifo
            `
            <button class="w-100  d-flex bg-white border border-white">
                <div class=" col-1  text-start text-success">
                    <i class="bi bi-question-circle"></i>
                </div>
                <div class="col-11 text-start">
                    <div class="h6"> ${task.title} </div>
                    <div class="">
                        <div class="text-secondary">#${task.id} created in ${task.date}</div>
                        <div class="fs-6" title="${task.description}">${task.description.substring(0, 80)}...
                        </div>
                    </div>
                    <div class="mt-2">
                        <span class="p-1 btn btn-primary">High</span>
                        <span class="p-1 btn btn-secondary">Feature</span>
                        <span class="p-1 btn btn-info">modify</span>
                        <span class="p-1 btn btn-danger onclick='deleteTask()'">delete</span>
                    </div>
                </div>
            </button>
            <hr class="border border-gray border-1 opacity-50">`
        } else if (task.status == "In Progress") {
            document.getElementById("in-progress-tasks-count").innerHTML = ++inProgressCount;
            document.getElementById("in-progress-tasks").innerHTML +=  
            `
            <button class="w-100  d-flex  bg-white border border-white">
                <div class="col-1  text-start text-success">
                    <i class="bi bi-arrow-clockwise"></i>
                </div>
                <div class="col-11 text-start">
                    <div class="h6">${task.title}</div>
                    <div class="">
                        <div class="">#${task.id} created in ${task.date}</div>
                        <div class="" title="to the affected account and services if possible. 
                        It might be hard to reproduce the exact environment on a local machine.">
                        ${task.description.substring(0, 80)}...</div>
                    </div>
                    <div class="mt-2">
                        <span class="p-1 btn btn-primary">High</span>
                        <span class="p-1 btn btn-secondary">Feature</span>
                        <span class="p-1 btn btn-info">modify</span>
                        <span class="p-1 btn btn-danger onclick='deleteTask()'">delete</span>
                    </div>
                </div>
            </button>
            <hr class="border border-gray border-1 opacity-50">`
            
        }else {
            document.getElementById("done-tasks-count").innerHTML = ++doneCount;
            document.getElementById("done-tasks").innerHTML +=  
            `
            <button class="w-100  d-flex bg-white border border-white">
                <div class="col-1  text-start text-success">
                    <i class="bi bi-check-circle"></i>
                </div>
                <div class="col-11 text-start">
                    <div class="h6">${task.title}</div>
                    <div class="">
                        <div class="">#${task.id} created in ${task.date}</div>
                        <div class="" title="If it is possible and when it does not violate security policies, 
                        it is usually helpful for the developer to access the original data that might have 
                        played a role in the problem.">${task.description.substring(0, 80)}...</div>
                    </div>
                    <div class="mt-2">
                        <span class="p-1 btn btn-primary">High</span>
                        <span class="p-1 btn btn-secondary">Feature</span>
                        <span class="p-1 btn btn-info">modify</span>
                        <span class="p-1 btn btn-danger onclick='deleteTask()'">delete</span>
                    </div>
                </div>
            </button>
            <hr class="border border-gray border-1 opacity-50">`
        }
    }
}