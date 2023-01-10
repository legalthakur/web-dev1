function onFormSubmit(){
    var formData=readFormData();
    insertNewCard(formData);
}

function readFormData(){
    var formData = {};
    formData["description"]= document.querySelector("#description").value;
    formData["sevierty"]=document.querySelector("#sevierty").value;
    formData["assignedto"]=document.querySelector("#assignedto").value;
    return formData;
}

function insertNewCard(data){
    const createCard = document.createElement("div");
    createCard.innerHTML=`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  const cardContainer= document.getElementById("carddiv");
  cardContainer.append(createCard);

    
    
}