import BuildingItem from '../src/components/BuildingItem.js';

const test = QUnit.test;

QUnit.module('building item test');

test('building item html', assert => {
    //arrange
    const building = {
        src: './assets/Acropolis.jpg',
        title: 'Acropolis',
        description: 'Ancient greek building from 19th century b.c.'
    };

    const expected = /*html*/ `
        <li>
            <img class="image" src="${building.src}" alt="Image of ${building.title}">
            <p class="title">${building.title}</p>
            <p class="description">${building.description}</p>    
        </li>
    `;
    //act
    const buildingItem = new BuildingItem({ building });
    const html = buildingItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});