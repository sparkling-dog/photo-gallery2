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

export default filterBuildings;