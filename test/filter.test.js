const test = QUnit.test;

QUnit.module('filter');

const buildings = [
    {
        src: './assets/Acropolis.jpg',
        title: 'Acropolis',
        description: 'Ancient greek building from 5th century b.c.',
        keyword: 'acropolis',
        location: 'Greece',
        century: 5,
        beforeOrAfter: 'before'
    },
    {
        src: './assets/Great-Temple-of-Amun.jpg',
        title: 'Great-Temple-of-Amun',
        description: 'Ancient Egyption building from 1530 b.c.',
        keyword: 'amun',
        location: 'Egypt',
        century: 16,
        beforeOrAfter: 'before'
    },
    {
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu',
        description: 'Ancient Peruvian building 15th century a.d.',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }
];

function filterBuildings(buildings, filter) {
    const lowerCaseFilter = filter.text.toLowerCase();
    return buildings.filter(building => {
        const lowerCaseTitle = building.title.toLowerCase();
        const hasTitle = lowerCaseTitle.includes(lowerCaseFilter);
        return hasTitle;
    });
}

test('string filters a title', assert => {
    // Arrange
    const filter = {
        text: 'Mac'
    };
   
    // Act
    const filtered = filterBuildings(buildings, filter);

    // Assert
    assert.deepEqual(filtered, [{
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu',
        description: 'Ancient Peruvian building 15th century a.d.',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }]);
});