import Component from '../components/Component.js';

class BuildingItem extends Component {
    render() {
        const buildingItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const building = this.props.building;
        const removeButton = buildingItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(building);
        });

        return buildingItem;
    }

    renderTemplate() {
        const building = this.props.building;
        return /*html*/ `
            <li>
                <img class="image" src="${building.src}" alt="Image of ${building.title}">
                <button class="remove-button">X</button>   
                <p class="title">${building.title}</p>
                <p class="location">Located in ${building.location}</p>
                <p class="century">Created in the ${building.century} century.</p>
            </li>
        `;
    }
}

export default BuildingItem;