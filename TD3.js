function augmenter(adulte,Chambre) {
    var input = document.getElementById(adulte,nombreEnfants,Chambre);
    input.value = parseInt(input.value) + 1;
}

function diminuer(adulte,Chambre) {
    var input = document.getElementById(adulte,nombreEnfants,Chambre);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}
