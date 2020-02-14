document.addEventListener('DOMContentLoaded', function (){

let page;

for(let i =2; i < 200; i++) {
     page = i;




let targetURL = "https://api.themoviedb.org/3/discover/movie?api_key=6631e5f1dc96088e0d26b86da29b5b6a&page="+page;
let xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', function(e) {
    if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);
        var listePuce = document.createElement('ul');

        console.log(json);
        for(let i = 0; i < json.results.length; i++){

            let puces = document.createElement('li');
            let image = document.createElement('img');
            let titreFilm = document.createElement('h2');
            let container = document.createElement('div');

            titreFilm.textContent = json.results[i].title;
            image.setAttribute('src', "https://image.tmdb.org/t/p/w500/" + json.results[i].poster_path);
            let noteUsers = document.createElement('div');
            noteUsers.textContent = json.results[i].vote_average+' / 10';


            puces.appendChild(titreFilm);
            puces.appendChild(container);
            listePuce.appendChild(puces);

            container.appendChild(image);
            container.appendChild(noteUsers);

            
            // function displaynone(){
            //     noteUsers.classList.add('hide');
            // }
            
            // //permet que la classe hide soit enclenché dès l'ouverture de la page
            // displaynone();

            // //event listener au survol de l'image
            // container.addEventListener('mouseenter', function () {
            //     //on supprime la classe qui met en display none la note user
            //     noteUsers.classList.remove('hide');
            // })
            // //event listener quand on sort du survol de l'image déclenche la fonction displaynone qui ajoute la classe hide à la note user
            // container.addEventListener('mouseout', displaynone)

        }

        document.body.appendChild(listePuce);

    }
})




// 






xhr.open('GET', targetURL, true);
xhr.send();



}



})





