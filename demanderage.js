function augmenter1(elementId) {
    var inputElement = document.getElementById('nombreEnfants');
    inputElement.value++;
    var nombreEnfants = inputElement.value;

    var formAges = document.getElementById('formAges');
    

    var label = document.createElement("label");
    label.textContent = "Âge de l'enfant " + nombreEnfants + ": ";
    
    var input = document.createElement("input");
    input.type = "number";
    input.name = "age_enfant_" + nombreEnfants;
    input.placeholder = "Âge de l'enfant";
    input.min = 0; 
    input.max = 17; 
    
    formAges.appendChild(document.createElement("br")); 
    formAges.appendChild(label);
    formAges.appendChild(input);
}

function diminuer1(elementId) {
    var inputElement = document.getElementById('nombreEnfants');
    if (inputElement.value > 0) {
        inputElement.value--;

       
        var formAges = document.getElementById('formAges');
        var labels = formAges.getElementsByTagName("label");
        var lastLabel = labels[labels.length - 1];
        var inputs = formAges.getElementsByTagName("input");
        var lastInput = inputs[inputs.length - 1];
        
        formAges.removeChild(lastInput);
        formAges.removeChild(lastLabel);
        formAges.removeChild(formAges.lastElementChild);
    }
}
