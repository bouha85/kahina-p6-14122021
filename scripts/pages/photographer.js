const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('photographerId');
console.log(photographerId);
const photographerMediaTag = document.getElementById('photographer-media');
console.log(photographerMediaTag);

fetch('././data/photographers.json')
    .then(response => response.json())
    .then(data => {
        let media = data.media.filter(media => media.photographerId == photographerId)
        for (const medium of media) {
            
            photographerMediaTag.innerHTML += `
              <li>
                    <figure>
                        <a href="Sample_Photos/Mimi/Animals_Rainbow.jpg">
                            <img src="Sample_Photos/${medium.image}" alt="${ medium.title }">
                        </a>
                        <figcaption>
                            <h4>${ medium.title }</h4>
                            <i class="fas fa-heart"></i>
                        </figcaption>
                    </figure>
                </li>
            `
            // photographerMediaTag.innerHTML += `
            //   <li>
            //         <figure>
            //             <a href="">
            //             <video controls="controls">
            //             <source
            //               src="Sample Photos/${medium.video}"
            //               type="Video" alt="${medium.title}"
            //             />
            //           </video>
            //             </a>
            //             <figcaption>
            //                 <h4>${ medium.title }</h4>
            //                 <i class="fas fa-heart"></i>
            //             </figcaption>
            //         </figure>
            //     </li>
            // `
        }
    })
    .catch(error => console.log(error))