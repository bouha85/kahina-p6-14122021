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


fetch('././data/photographers.json')
    .then(response => response.json())
    .then(data => {
        const photographer = data.photographers.find(photographer => photographer.id == photographerId);
        let media = data.media.filter(media => media.photographerId == photographerId);
        showPhotographerDetails(photographer);
        showHeaderModal(photographer);
        showPhotographerMedia(media);
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
    // let compteur = 0;
    // const btnLike = document.getElementsByClassName('btn_like')
    // console.log(btnLike);
    // btnLike.addEventListener('click', function(){
    //     add()
    // });
    // function add(){
    //      compteur += 1;
    //      console.log(compteur, 'compteur après incrimentation');
    // }
    // add()

