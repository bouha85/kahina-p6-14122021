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
        sorted(media)
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
        photographerMediaTag.innerHTML = ``
        media.forEach(medium => MediaFactory.render(photographerMediaTag, medium));
    };
     
    const triSelect = document.getElementById('trie')
    triSelect.addEventListener('change', function(e) {
    console.log(triSelect.value);
    });

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

function sorted(photographeMedia) {
    const triSelect = document.getElementById('trie');

    triSelect.addEventListener('change', function(e) {
        const value = triSelect.value;

        if (value == "popularity") {
            const sortedMedia = photographeMedia.sort((a, b) => b.likes - a.likes)
            showPhotographerMedia(sortedMedia);
            console.log(sortedMedia);
        }

        if (value == "date") {
            const sortedMedia = photographeMedia.sort((a, b) => new Date(b.date) - new Date(a.date))
            showPhotographerMedia(sortedMedia);
            console.log(sortedMedia);
        }

        if (value == "title") {
            const sortedMedia = photographeMedia.sort((a, b) => {
                if (a.title < b.title) { return -1; }
                if (a.title > b.title) { return 1; }
                return 0;
            })
            console.log(sortedMedia);
            showPhotographerMedia(sortedMedia);
        }
    })
};


function displayLightbox(event) {
    const photograperMediaTag = document.querySelectorAll('.photographer-media')
    const mediaURLArray = Array.from(photograperMediaTag).map(media => media.src)
    let source = event.target.src

    const lightboxModal = document.getElementById("lightbox_modal");
    const closeLightbox = document.getElementById("close_lightbox");
    const containerImg = document.getElementById('lightbox_img_container')
    const btnPrev = document.querySelector('.lightbox_prev');
    const btnNext = document.querySelector('.lightbox_next');
    const lightboxImg = document.createElement('img');
    const photographerMediaTag = document.querySelectorAll('.photographer-media');
    const lightboxTitle = document.querySelector('.lightbox_title_container');

    let mediaIdx = mediaURLArray.indexOf(source)
    let currentSlideIndex = mediaIdx;

    photographerMediaTag.forEach(image => {
        image.addEventListener('click', function(e) {
            lightboxModal.style.display = 'block'
            lightboxImg.id = "lightbox-img"
            lightboxImg.src = e.currentTarget.src;
            lightboxImg.alt = e.currentTarget.alt
            containerImg.innerHTML = ""
            containerImg.appendChild(lightboxImg);
            lightboxTitle.innerHTML=""

        })
    })

    btnNext.addEventListener('click', function() {
        currentSlideIndex++;

        if (currentSlideIndex > mediaURLArray.length) {
            currentSlideIndex = 0
        }
        lightboxImg.src = mediaURLArray[currentSlideIndex];
    })

    btnPrev.addEventListener('click', function() {
        currentSlideIndex--;
        console.log(currentSlideIndex);

        if (currentSlideIndex < 0) {
            currentSlideIndex = mediaURLArray.length - 1
        }
        let media = mediaURLArray[currentSlideIndex]
        if (media.split('.').pop() == 'mp4') {
            containerImg.innerHTML = `
              <video controls>
                    <source src="${media}" class="photographer-media">
                </video>
            `
        } else {
            containerImg.innerHTML = `<img id="lightbox-img" src="${media}">`
        }
    })

    closeLightbox.addEventListener('click', function() {
        lightboxModal.style.display = 'none'
        containerImg.innerHTML = ""
    })
}