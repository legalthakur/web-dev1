function onFormSubmit(){
    var formData=readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    var formData = {};
    formData["description"]= document.querySelector("#description").value;
    formData["sevierty"]=document.querySelector("#sevierty").value;
    formData["assignedto"]=document.querySelector("#assignedto").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("eventlist").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length);
    cell1= newRow.insertCell(0);
    cell1.innerHTML= data.description;
    cell2=newRow.insertCell(1);
    cell2.innerHTML= data.sevierty;
    cell3=newRow.insertCell(2);
    cell3.innerHTML= "New";
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.assignedto;
    
    
}