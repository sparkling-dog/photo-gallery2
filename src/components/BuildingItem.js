import Component from '../components/Component.js';

class BuildingItem extends Component {
    
    // for stretch goal
    // render() {
    //     const buildingItem = this.renderDOM();
    //     const building = this.props.building;

    //     return buildingItem;
    // }

    renderTemplate() {
        const building = this.props.building;
        return /*html*/ `
            <li>
                <img class="image" src="${building.src}" alt="Image of ${building.title}">
                <p class="title">${building.title}</p>
                <p class="description">${building.description}</p>    
            </li>
        `;
    }
}


export default BuildingItem;