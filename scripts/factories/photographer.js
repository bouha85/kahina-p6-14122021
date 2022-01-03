function photographerFactory(data) {
    const { id, name, city, country, tagline, price, portrait } = data;

    const picture = `Sample_Photos/Photographers ID photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const a = document.createElement('a')
        a.setAttribute("href", `photographer.html?photographerId=${id}`);
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const p1 = document.createElement('p');
        p1.classList.add('city_country');
        p1.textContent = city + ', ' + country;

        const p2 = document.createElement('p');
        p2.classList.add('tagline');
        p2.textContent = tagline;
        const p3 = document.createElement('p');
        p3.classList.add('price');
        p3.textContent = price + '€/jour';
        a.appendChild(img);
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);


        return (article);
    }
    return { picture, name, city, country, tagline, price, getUserCardDOM }
}