import BuildingItem from '../src/components/BuildingItem.js';

const test = QUnit.test;

QUnit.module('building item test');

test('building item html', assert => {
    //arrange
    const building = {
        src: './assets/Acropolis.jpg',
        title: 'Acropolis',
        location: 'Greece',
        century: 10
    };

    const expected = /*html*/ `
        <li>
            <img class="image" src="${building.src}" alt="Image of ${building.title}">
            <button class="remove-button">X</button>  
            <p class="title">${building.title}</p>
            <p class="location">Located in ${building.location}</p>
            <p class="century">Created in the ${building.century} century.</p>
        </li>
    `;
    //act
    const buildingItem = new BuildingItem({ building });
    const html = buildingItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});