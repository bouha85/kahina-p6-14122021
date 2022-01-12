
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
        getPhotographerBio.innerHTML +=  
            ` <div id="photograph-info">
                        <h2>${photographer.name}</h2>
                      <P class="city_country">${photographer.city}, ${photographer.country}</P>
                      <p>${photographer.tagline}</p>
                      </div>
                      <button class="contact_button" id="contact_button" onclick="displayModal()">Contactez-moi</button>
                      <img class="image-photographer" src="Sample_Photos/Photographers ID Photos/${photographer.portrait}" alt="Portrait de ${photographer.name}">
             `
              headerModal.innerHTML += `<h2>Contactez-moi <br> ${photographer.name} </h2>
              <img src="assets/icons/close.svg" onclick="closeModal()" />`
        let media = data.media.filter(media => media.photographerId == photographerId)
        for (const medium of media) {
            if (medium.video != undefined) { // si le media est une vidéo
                photographerMediaTag.innerHTML += `
              <li>
                    <figure>
                        <a href="Sample_Photos/Mimi/Animals_Rainbow.jpg">
                          <video src="Sample_Photos/${medium.video}" controls></video>
                        </a>
                        <figcaption>
                            <h4>${ medium.title }</h4>
                            <button class="btn_like">${ medium.likes } <i class="fas fa-heart"></i></button>
                        </figcaption>
                    </figure>
                </li>
            `
            } else { // si le média est une image
                photographerMediaTag.innerHTML += `
              <li>
                    <figure>
                        <a href="Sample_Photos/Mimi/Animals_Rainbow.jpg">
                            <img src="Sample_Photos/${medium.image}" alt="${ medium.title }">
                        </a>
                        <figcaption>
                            <h4>${ medium.title }</h4>
                            <button class="btn_like">${ medium.likes } <i class="fas fa-heart"></i></button>
                        </figcaption>
                    </figure>
                </li>
            `
            }
        }
        
    })
    .catch(error => console.log(error))
    console.log(media);
    let btnLike = document.getElementsByClassName('btn_like');
    console.log(btnLike);
    count =0;
    // btnLike.addEventListener('click', function(){
    //     count +=1
    // })
    btnLike.addEventListener('click', function() {
        count +=1;
        medium.likes +=1
    });

