/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

//=========   this is all the global variables  ===========
 var id = 18;
 let toDoCount = 0;
 let inProgressCount = 0;
 let doneCount = 0;
 reloadTasks()   // this function for affiche the content of page

 //==================== add  a user story ========================

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
                <div class="" title="${task.description}"> ${task.description.substring(0, 80)}...</div>
            </div>
            <div class="mt-2 ">
                <span class="p-1 btn btn-primary">${task.priority}</span>
                <span class="p-1 btn btn-secondary" >${task.type}</span>
                <span class="p-1 btn btn-info" onclick="editTask(${task.id})">Edit</span>   
                <span class="p-1 btn btn-danger" onclick="deleteTask(${task.id})">delete</span>
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
                    <div class="" title="${task.description}"> ${task.description.substring(0, 80)}...</div>
                </div>
                <div class="mt-2">
                    <span class="p-1 btn btn-primary">${task.priority}</span>
                    <span class="p-1 btn btn-secondary" >${task.type}</span>  
                    <span class="p-1 btn btn-info" onclick="editTask(${task.id})">Edit</span>
                    <span class="p-1 btn btn-danger" onclick="deleteTask(${task.id})">delete</span>
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
                    <div class="" title="${task.description}"> ${task.description.substring(0, 80)}...</div>
                </div>
                <div class="mt-2">
                    <span class="p-1 btn btn-primary">${task.priority}</span>
                    <span class="p-1 btn btn-secondary" >${task.type}</span>
                    <span class="p-1 btn btn-info" onclick="editTask(${task.id})">Edit</span>
                    <span class="p-1 btn btn-danger" onclick="deleteTask(${task.id})">delete</span> 
                </div>
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
     

//==================================== edit a user story ===================================

function editTask(id) {
    // Initialisez task form

    let index;
    for(let i = 0; i  < tasks.length; i++){
        if ( tasks[i].id == id ) { index = i}
    }

    //remplir le formilair automatique
    
    document.getElementById("Title").value = tasks[index].title

    if(tasks[index].type === "Bug" ) document.getElementById("flexRadioDefault2").checked = true
    else  document.getElementById("flexRadioDefault1").checked = true

    document.getElementById("selectPriority").value = tasks[index].priority
    document.getElementById("selectStatus").value = tasks[index].status
    document.getElementById("date").value = tasks[index].date
    document.getElementById("description").value = tasks[index].description

    $('#modal-task').modal('show');  //afficher le popup

   document.querySelector("#save").setAttribute("onclick", `updateTask(${index})`);
 

}

function updateTask(index) {
        tasks[index].title       = document.getElementById("Title").value,
        tasks[index].type        = document.querySelector('input[type="radio"]:checked').value,
        tasks[index].priority    = document.getElementById("selectPriority").value,
        tasks[index].status      = document.getElementById("selectStatus").value,
        tasks[index].date        = document.getElementById("date").value,
        tasks[index].description = document.getElementById("description").value
  
        reloadTasks();
        $('#modal-task').modal('hide');
}

//================================== remove a user story ========================================

function deleteTask(id) {
    // Get index of task in the array
    let index;
    for(let i = 0; i < tasks.length; i++){
        if ( tasks[i].id == id ) { index = i}
    }
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
           tasks.splice (index, 1);  //for delete a   u.s
           reloadTasks()  // afficher tout les u.s
          swal("Your user story has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your user story file is safe!");
        }
      });
      

}



function resetForm() {
    // Clear task form from data
        
   document.querySelector("#save").setAttribute("onclick", `createTask()`);
    // Hide all action buttons
    document.getElementById("Title").value = ""
    document.getElementById("selectPriority").value = ""
    document.getElementById("selectStatus").value = ""
    document.getElementById("date").value = ""
    document.getElementById("description").value = ""
}

//=================================afficher les user story =============================

function reloadTasks() {

    // Remove tasks elements
    document.getElementById("to-do-tasks").innerHTML= " ";  
    document.getElementById("in-progress-tasks").innerHTML = " "; 
    document.getElementById("done-tasks").innerHTML =  " ";
        
    toDoCount = 0;
    inProgressCount = 0;
    doneCount = 0;
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
                        <span class="p-1 btn btn-primary">${task.priority}</span>
                        <span class="p-1 btn btn-secondary" >${task.type}</span>
                        <span class="p-1 btn btn-info" onclick="editTask(${task.id})">Edit</span>
                        <span class="p-1 btn btn-danger" onclick="deleteTask(${task.id})">delete</span>
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
                        <div class="" title="${task.description}">
                        ${task.description.substring(0, 80)}...</div>
                    </div>
                    <div class="mt-2">
                        <span class="p-1 btn btn-primary">${task.priority}</span>
                        <span class="p-1 btn btn-secondary" >${task.type}</span>
                        <span class="p-1 btn btn-info" onclick="editTask(${task.id})">Edit</span>
                        <span class="p-1 btn btn-danger" onclick="deleteTask(${task.id})">delete</span>
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
                        <div class="" title="${task.description}">${task.description.substring(0, 80)}...</div>
                    </div>
                    <div class="mt-2">
                        <span class="p-1 btn btn-primary">${task.priority}</span>
                        <span class="p-1 btn btn-secondary" >${task.type}</span>
                        <span class="p-1 btn btn-info" onclick="editTask(${task.id})">Edit</span>
                        <span class="p-1 btn btn-danger" onclick="deleteTask(${task.id})">delete</span>
                    </div>
                </div>
            </button>
            <hr class="border border-gray border-1 opacity-50">`
        }
    }
}