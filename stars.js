
const topContainer = document.querySelector('.top-section');
let numberOfStars = 120;
let starList = [];
let stars, textNodes, min, max, glyphs, glyphText;

function createStar() {
    for (let i = 0; i <= numberOfStars; i++) {
        stars = document.createElement('div')
        textNodes = document.createTextNode('');
        stars.appendChild(textNodes);

        glyphs = document.createElement('span')
        glyphText = document.createTextNode('')
        glyphs.classList.add('glyphicon')
        glyphs.classList.add('glyphicon-star-empty')
        stars.appendChild(glyphs)

        stars.classList.add('star');
        stars.id = "star-" + i;
        stars.style.fontSize = `${randomInt(30, 60)}px`;
        stars.style.color = 'white';
        stars.style.display = 'block';
        stars.style.position = 'fixed';
        stars.style.margin = `${randomInt(40, 80)}px`;
        stars.style.overflow = 'hidden';
        starList.push(stars)

    }

    setStarsRandomPosition(starList);
}

function setStarsRandomPosition(starList) {
    for (let i = 0; i <= starList.length - 1; i++) {
        starList[i].style.top = randomInt(1, 1200) + 'px';
        starList[i].style.left = randomInt(1, 1800) + 'px';
        topContainer.append(starList[i]);
    }
}


function randomInt(min, max) {

    return Math.abs(Math.ceil(Math.random() * (min - max)));
}

createStar();


