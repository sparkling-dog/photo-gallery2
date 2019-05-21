import Component from './Component.js';
import BuildingItem from './BuildingItem.js';

class BuildingList extends Component {
    
    render() {
        const list = this.renderDOM();
        const buildings = this.props.buildings;

        buildings.forEach(building => {
            const buildingItem = new BuildingItem({ building });
            const buildingItemDOM = buildingItem.render();
            list.appendChild(buildingItemDOM);
        });
        return list;
    }

    renderTemplate() {
        const buildings = this.props.buildings;
        return /*html*/`
            <ul id="buildings">${buildings.length}  Dirt is still Awesome</ul>
        `;
    }

}

export default BuildingList;