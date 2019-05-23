import Component from './Component.js';
import BuildingItem from './BuildingItem.js';

class BuildingList extends Component {
    
    render() {
        const list = this.renderDOM();
        const buildings = this.props.buildings;
        const onRemove = this.props.onRemove;

        buildings.forEach(building => {
            const buildingItem = new BuildingItem({ building, onRemove });
            const buildingItemDOM = buildingItem.render();
            list.appendChild(buildingItemDOM);
        });
        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul id="buildings"></ul>
        `;
    }

}

export default BuildingList;