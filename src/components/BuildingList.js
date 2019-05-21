import Component from './Component.js';

class BuildingList extends Component {
    

    renderTemplate() {
        const buildings = this.props.buildings;
        return /*html*/`
            <ul id="buildings">${buildings.length}  Dirt is still Awesome</ul>
        `;
    }

}

export default BuildingList;