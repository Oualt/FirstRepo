let ville = "serrieres";
let button = document.querySelector('#changer');

getMeteo(ville);

button.addEventListener("click", (e) => {
    ville = prompt("Choisissez une ville :");
    e.stopPropagation();
    getMeteo(ville);
});

function getMeteo(villeChoisie) {
    ville = villeChoisie;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville +'&appid=fcbd9702434170cd0468b0d9595d40ef&units=metric';
    let requete = new XMLHttpRequest();
    requete.open('GET', url)
    requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    requete.responseType = 'json';
    requete.send()
    
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector("#ville").textContent = ville;
                document.querySelector("#temperature_label").textContent = temperature;
             }
             else {alert("Une erreur est survenue.");}
        }
    }
}