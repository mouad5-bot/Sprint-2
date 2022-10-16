 var id = 1;
 function getFunction(){
    let task= {
        id : id ++,
        title : document.getElementById("Title").value,
        type : document.querySelector('input[type="radio"]:checked').value,
        priority : document.getElementById("selectPriority").value,
        status : document.getElementById("selectStatus").value,
        date : document.getElementById("date").value,
        description : document.getElementById("description").value
    };
    console.log(task) 
    document.getElementById("to-do-tasks").innerHTML +=  //si on met = le contenu de todo va changer et remplacer par le neaveau ifo
        `<hr class="border border-gray border-1 opacity-50 ">
        <button class="w-100  d-flex bg-white border border-white">
        <div class=" col-1  text-start text-success">
            <i class="bi bi-question-circle"></i>
        </div>
        <div class="col-11 text-start">
            <div class="h6"> ${task.title} </div>
            <div class="">
                <div class="text-secondary">#${task.id} created in ${task.date}</div>
                <div class="fs-6" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">There is hardly anything more frustrating than having t...</div>
            </div>
            <div class="mt-2">
                <span class="bg-gradient-blue-purple rounded-2 p-1 text-white">High</span>
                <span class="bg-black-100 rounded-2 p-1 text-white">Feature</span>
            </div>
        </div>
        </button>`
    
    document.getElementById("teee").click()   //c'est pour fermer l'alert de formulaire
}


