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

    //addEvent pour likes
    let counterPlus = document.querySelectorAll('.btn-like');
    console.log(counterPlus);
    //add likes and display total on sorted images
    counterPlus.forEach((btn) => btn.addEventListener("click", sortCounter));
    function sortCounter(e) {
      let numberOfLikes = e.currentTarget //target text number of likes
        .closest(".likes")
      numberOfLikes.innerHTML = parseInt(numberOfLikes.innerHTML) + 1; //modify by adding 1
      document.getElementById("total-likes").innerHTML = ++totalLikes; //modify total likes by adding 1
    }



















//     const convertStringToHTML = (innerHTML) => {
//         const div = document.createElement("div");  //create inner divs
//         div.innerHTML = innerHTML;
//         //profile fragments (container)
//         const fragment = document.createDocumentFragment();
//         Array.from(div.children).forEach((child) => fragment.appendChild(child));
//         return fragment;
//       };

//        const getMedias = (medias) => { //recover general media and display
//         return convertStringToHTML(
//           medias
//             .map((tag, medium) => {
//               let m = new MediaFactory(tag, medium);
//               return m.static();
//             })
//             .join("")
//         );
//       };
      
//       //create inner divs
    

// //ajout un event listener sur les boutons


// const byPupularite = document.querySelector('#popularity');
// const byDate = document.querySelector('#date');
// const byTitle = document.querySelector('#title');
// const btnFiltre = document.querySelector('.sorting_menu_list_choice')
// let count = 0;
// // function sorted(filter, btnFiltre) {
// //    btnFiltre.addEventListener("click", () => {
// //         document.querySelector("#photographer-media").innerHTML = ""; // Vider le contenu du #portfolio
// //         // if (filter === "likes") {
// //         //   data.media.sort((a, b) => (a.likes > b.likes ? -1 : 1));
// //         // }
// //         // if (filter === "title") {
// //         //   data.media.sort();
// //         // }
// //         // if (filter === "date") {
// //         //     data.media.sort((a, b) => (a.date > b.date ? 1 : -1));
// //         // }

// // }
// // }
   



   

    




