function filterBuildings(buildings, filter) {
    const lowerCaseFilter = filter.text.toLowerCase();
    return buildings.filter(building => {
        const lowerCaseTitle = 
            building
                .title
                .toLowerCase();
        const lowerCaseLocation =
            building
                .location
                .toLowerCase();
        const century = building.century.toString();
        console.log(typeof century);
        const hasCentury = century.includes(filter.text);
        const hasTitle = lowerCaseTitle.includes(lowerCaseFilter);
        const hasLocation = lowerCaseLocation.includes(lowerCaseFilter);
        return hasTitle || hasLocation || hasCentury;
    });
}

export default filterBuildings;