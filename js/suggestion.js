let page;

for(let i =1; i < 200; i++) {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=6631e5f1dc96088e0d26b86da29b5b6a&page="
    let page = i;
    let targetURL = url + page
}




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


            
            
            image.addEventListener('mouseover', function () {

                noteUsers.classList.remove('note-user');
            })

            image.addEventListener('mouseout', function(){
                noteUsers.classList.add('note-user');
            })


        }

        document.body.appendChild(listePuce);

    }
})




// 






xhr.open('GET', targetURL, true);
xhr.send();












