function rechercher(event) {
    event.preventDefault();


    var nombreAdulte = document.getElementById('adulte').value;
    var nombreEnfants = document.getElementById('nombreEnfants').value;
    var nombreChambre = document.getElementById('Chambre').value;
    var travail = document.getElementById('travail').checked ? "Oui" : "Non";


    document.getElementById('nombreAdulte').innerText = nombreAdulte;
    document.getElementById('Enfants').innerText = nombreEnfants;
    document.getElementById('nombreChambre').innerText = nombreChambre;
    document.getElementById('nombretravail').innerText = travail;
}
