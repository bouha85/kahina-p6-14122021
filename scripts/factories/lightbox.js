window.onload = () => {
    const lightbox = document.querySelector('#lightbox');
    console.log(lightbox );
    const close = document.querySelector('.lightbox-close');
    const links = document.querySelectorAll('#photographer-media a');
    console.log(links);
    
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
const images = document.querySelectorAll('#photographer-media a img');
console.log(images);
// const photographerMediaTag = document.getElementById('photographer-media')
const next = document.getElementById("#next");
const prev = document.getElementById("#prev");
let imageActive = 0;
photographerMediaTag[imageActive].classList.add('show');

// clique sur le button suivant
next.addEventListener("click", function() {
    photographerMediaTag[imageActive].classList.remove('show');
    photographerMediaTag[imageActive].classList.add('hidden');
    imageActive +=1;
    if (imageActive >= photographerMediaTag.length){
        imageActive = 0;
    }
    photographerMediaTag[imageActive].classList.remove('hidden');
    photographerMediaTag[imageActive].classList.add('show');


})