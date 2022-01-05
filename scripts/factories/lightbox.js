window.onload = () => {
    const lightbox = document.querySelector('#lightbox');
    const close = document.querySelector('.lightbox-close');
    const links = document.querySelectorAll('#media a');
    
    //on ajout l'écouteur click sur les liens
    for (let link of links) {
        link.addEventListener("click", function(e){
            //on desactive le comportement par defaut
            e.preventDefault();
            //on ajoute l'image du lien cliqué dans la modale
            const image = lightbox.querySelector('.lightbox-container img');
            image.src= this.href;
            //on affiche la lightbox
            lightbox.classList.add("show");
        })
    }

    //on active le button close
    close.addEventListener("click", function(){
        lightbox.classList.remove("show");
    })
}
const images = document.querySelectorAll('media.photographerId');
console.log(images);
const next = document.getElementById("#next");
const prev = document.getElementById("#prev");
let imageActive = 0;
images[imageActive].classList.add('showImage');

//clique sur le button suivant
next.addEventListener("click", function() {
    images[imageActive].classList.remove('showImage');
    images[imageActive].classList.add('hiddenImage');
    imageActive +=1;
    if (imageActive >=images.length){
        imageActive = 0;
    }
    images[imageActive].classList.remove('hiddenImage');
    images[imageActive].classList.add('showImage');


})