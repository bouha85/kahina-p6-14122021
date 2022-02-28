class ImageFactory {
    static render(tag, medium) {
        tag.innerHTML += `
              <li class="portfolio-pics">
                    <figure>
                        <a class="images" href="">
                            <img src="Sample_Photos/${medium.image}" alt="${ medium.title }" class="photographer-media" onclick="displayLightbox(event)">
                        </a>
                        <figcaption>
                            <h4>${ medium.title }</h4>
                            <button class="likes"><span class="portfolio-likes">${medium.likes} </span><i class="fas fa-heart btn-like"></i></button>
                        </figcaption>
                    </figure>
                </li>
            `
    }
}


class VideoFactory {
    static render(tag, medium) {
        tag.innerHTML += `
              <li class="portfolio-pics">
                    <figure>
                        <a class="video" href=">
                          <video src="Sample_Photos/${medium.video}" controls  class="photographer-media" onclick="displayLightbox(event)"></video>
                          </a>
                        <figcaption>
                            <h4>${ medium.title }</h4>
                            <button class="likes"> <span class="portfolio-likes">${medium.likes} </span> <i  class="fas fa-heart .btn-like"></i></button>
                        </figcaption>
                    </figure>
                </li>
            `
    }
}


class MediaFactory {
    static render(tag, medium) {
        medium.video != undefined ? VideoFactory.render(tag, medium) : ImageFactory.render(tag, medium);
    }
}

