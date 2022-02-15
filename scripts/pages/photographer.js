const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('photographerId');
console.log(photographerId);
const photographerMediaTag = document.getElementById('photographer-media');
console.log(photographerMediaTag);
const getPhotographerBio = document.getElementById('photograph-header');
console.log(getPhotographerBio);
const headerModal = document.querySelector('.modal header');
console.log(headerModal);
const badge = document.querySelector('.badge');


fetch('././data/photographers.json')
    .then(response => response.json())
    .then(data => {
        const photographer = data.photographers.find(photographer => photographer.id == photographerId);
        let media = data.media.filter(media => media.photographerId == photographerId);
        showPhotographerDetails(photographer);
        showHeaderModal(photographer);
        showPhotographerMedia(media);
        showPricePhotographer(photographer);
        showTotalLikes(media);
        // showFilter(filter, media)
        sorted(filter, btnFiltre)
        

        
    })
    .catch(error => console.log(error));


    function showPhotographerDetails(photographer){
        getPhotographerBio.innerHTML +=  
            ` <div id="photograph-info">
                        <h2>${photographer.name}</h2>
                      <P class="city_country">${photographer.city}, ${photographer.country}</P>
                      <p>${photographer.tagline}</p>
                      </div>
                      <button class="contact_button" id="contact_button" onclick="displayModal()">Contactez-moi</button>
                      <img class="image-photographer" src="Sample_Photos/Photographers ID Photos/${photographer.portrait}" alt="Portrait de ${photographer.name}">
             `
    };

    function showPhotographerMedia(media){
        media.forEach(medium => MediaFactory.render(photographerMediaTag, medium));
    };
     
  

    function showHeaderModal(photographer){
        headerModal.innerHTML += `<h2>Contactez-moi <br> ${photographer.name} </h2>
              <img src="assets/icons/close.svg" onclick="closeModal()" />`
    }

    function showPricePhotographer(photographer){
        badge.innerHTML += `<span id="total-likes" aria-label="Total image likes">
        </span
     ><i class="fas fa-heart healtTotal"></i> <span id="prix" aria-label="Photographer daily price"></span>${photographer.price} €/jour`
    }
    

function showTotalLikes(media) {
    //addEvent pour likes
    console.log(media);
    let counterPlus = document.querySelectorAll('.btn-like');
    console.log(counterPlus);
    //add likes and display total on sorted images
    let totalLikes = media
        .map((m) => m.likes)
        .reduce((total, value) => total + value);
    console.log(totalLikes);
    document.getElementById("total-likes").innerHTML = totalLikes;

    counterPlus.forEach((btn) => btn.addEventListener("click", function(e) {
        let numberOfLikes = e.currentTarget
        .closest(".likes")
        .querySelector(".portfolio-likes");
        numberOfLikes.innerHTML = parseInt(numberOfLikes.innerHTML) +1;
        document.getElementById("total-likes").innerHTML = ++totalLikes; //modify total likes by adding 1
    }));
}

//ajout un event listener sur les boutons



function sorted(filter, btnFiltre) {
    const byPupularite = document.querySelector('#popularity');
    const byDate = document.querySelector('#date');
    const byTitle = document.querySelector('#title');
    // const btnFiltre = document.querySelector('.sorting_menu_list_choice')
    // let count = 0;
    
        btnFiltre.addEventListener("click", () => {
            document.querySelector("#photographer-media").innerHTML = ""; // Vider le contenu du #portfolio
            if (filter === "likes") {
              media.sort((a, b) => (a.likes > b.likes ? -1 : 1));
            }
            if (filter === "title") {
              media.sort();
            }
            if (filter === "date") {
              media.sort((a, b) => (a.date > b.date ? 1 : -1));
            }
    });
    
   
   console.log(filter);

//  Récupérer la tri et le sort du tableau data.media
 document.querySelector("#photographer-media").appendChild(showPhotographerMedia(media))
        sorted("likes", byPupularite);
        sorted("title", byTitle);
        sorted("date", byDate); 
};


   

    




