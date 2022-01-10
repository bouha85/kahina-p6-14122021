
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('photographerId');
console.log(photographerId);
const photographerMediaTag = document.getElementById('photographer-media');
console.log(photographerMediaTag);
const getPhotographerBio = document.getElementById('photograph-header');
console.log(getPhotographerBio);


fetch('././data/photographers.json')
    .then(response => response.json())
    .then(data => {
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
                            <button>${ medium.likes } <i class="fas fa-heart"></i></button>
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
                            <button>${ medium.likes } <i class="fas fa-heart"></i></button>
                        </figcaption>
                    </figure>
                </li>
            `
            }
        }
        
    })
    .catch(error => console.log(error))
    console.log(media);

    fetch('././data/photographers.json')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.photographers);
        console.log(photographerId);
        const photographers = data.photographers  //.find(photographer => photographerId == photographerId);
        for(let photographer of photographers){
            getPhotographerBio.innerHTML +=  
            ` <div id="photograph-info">
                        <h2>${photographer.name}</h2>
                      <P class="city_country">${photographer.city}, ${photographer.country}</P>
                      <p>${photographer.tagline}</p>
                      </div>
                      <button class="contact_button" id="contact_button" onclick="displayModal()">Contactez-moi</button>
                      <img class="image-photographer" src="Sample_Photos/Photographers ID Photos/${photographer.portrait}" alt="Portrait de ${photographer.name}">
             `
        }
        
    });
    
    
    
    // const getPhotographerBio = getElementById('photograph-header');
    // console.log(getPhotographerBio);

    // getPhotographerBio.innerHTML =  `
    //         
    //     `
    
        // const data = await loadData().then((data) => {
        //     const photographer = data.photographers.find((photographer) => {
        //       return photographer.id === urlPhotographerId;
        //     });
        //     const media = data.media.filter((media) => {
        //       return media.photographerId === urlPhotographerId;
        //     });
          
        //     return {
        //       photographer: photographer,
        //       medias: media,
        //     };
        //   });


    // <section id="photograph-header">
    //         <div id="photograph-info">
    //             <h2>Mimi Keel</h2>
    //             <P class="city_country">London, UK</P>
    //             <p>Voir le beau dans le quotidien</p>
    //         </div>
    //         <button class="contact_button" id="contact_button" onclick="displayModal()">Contactez-moi</button>
    //         <img class="image-photographer" src="Sample_Photos/Photographers ID Photos/MimiKeel.jpg" alt="Mimi Keel">
    //     </section>
    
        
            
           