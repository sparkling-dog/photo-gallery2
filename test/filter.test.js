const test = QUnit.test;

QUnit.module('filter');

const buildings = [
    {
        src: './assets/Acropolis.jpg',
        title: 'Acropolis',
        keyword: 'acropolis',
        location: 'Greece',
        century: 5,
        beforeOrAfter: 'before'
    },
    {
        src: './assets/Great-Temple-of-Amun.jpg',
        title: 'Great-Temple-of-Amun',
        keyword: 'amun',
        location: 'Egypt',
        century: 16,
        beforeOrAfter: 'before'
    },
    {
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu1',
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
        const lowerCaseLocation = building.location.toLowerCase();
        const hasTitle = lowerCaseTitle.includes(lowerCaseFilter);
        const hasLocation = lowerCaseLocation.includes(lowerCaseFilter);
        return hasTitle || hasLocation;
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
        title: 'Machu-Picchu1',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }]);
});

test('tests for uppercase to lowercase functionality', assert => {
    // Arrange
    const filter = {
        text: 'MAC'
    };
   
    // Act
    const filtered = filterBuildings(buildings, filter);

    // Assert
    assert.deepEqual(filtered, [{
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu1',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }]);
});

test('tests for lowercase input', assert => {
    // Arrange
    const filter = {
        text: 'mac'
    };
   
    // Act
    const filtered = filterBuildings(buildings, filter);

    // Assert
    assert.deepEqual(filtered, [{
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu1',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }]);
});

test('tests incase user inputs number', assert => {
    // Arrange
    const filter = {
        text: '1'
    };
   
    // Act
    const filtered = filterBuildings(buildings, filter);

    // Assert
    assert.deepEqual(filtered, [{
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu1',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }]);
});

test('tests location filter', assert => {
    // Arrange
    const filter = {
        text: 'Peru'
    };
   
    // Act
    const filtered = filterBuildings(buildings, filter);

    // Assert
    assert.deepEqual(filtered, [{
        src: './assets/Machu-Picchu.jpg',
        title: 'Machu-Picchu1',
        keyword: 'picchu',
        location: 'Peru',
        century: 15,
        beforeOrAfter: 'after'
    }]);
});

// test('tests search by century', assert => {
//     // Arrange
//     const filter = {
//         text: 15
//     };
   
//     // Act
//     const filtered = filterBuildings(buildings, filter);

//     // Assert
//     assert.deepEqual(filtered, [{
//         src: './assets/Machu-Picchu.jpg',
//         title: 'Machu-Picchu1',
//         keyword: 'picchu',
//         location: 'Peru',
//         century: 15,
//         beforeOrAfter: 'after'
//     }]);
// });