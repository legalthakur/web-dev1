function onFormSubmit(){
    var formData=readFormData();
    insertNewCard(formData);
}

function readFormData(){
    var formData = {};
    formData["description"]= document.querySelector("#description").value;
    formData["sevierty"]=document.querySelector("#sevierty").value;
    formData["assignedTo"]=document.querySelector("#assignedTo").value;
    return formData;
}

function insertNewCard(data){
    const createCard = document.createElement("div");
    createCard.innerHTML=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.sevierty}</h5>
      <p class="card-text">${data.description}</p>
      <p>Assigned to: ${data.assignedTo}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> <br>`;
  const cardContainer= document.getElementById("newDiv");
  cardContainer.append(createCard);

    
    
}