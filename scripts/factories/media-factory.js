class ImageFactory {
    static render(tag, medium) {
        tag.innerHTML += `
              <li class="portfolio-pics">
                    <figure>
                        <a class="images" href="Sample_Photos/${medium.image}">
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


class VideoFactory {
    static render(tag, medium) {
        tag.innerHTML += `
              <li class="portfolio-pics">
                    <figure>
                        <a class="video" href="Sample_Photos/${medium.video}">
                          <video src="Sample_Photos/${medium.video}" controls></video>
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


class MediaFactory {
    static render(tag, medium) {
        medium.video != undefined ? VideoFactory.render(tag, medium) : ImageFactory.render(tag, medium);
    }
}