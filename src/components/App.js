import buildings from '../../data/buildings.js';
import Filter from '../components/Filter.js';
import Component from './Component.js';
import Header from './Header.js';
import BuildingList from './BuildingList.js';
import Modal from './Modal.js';

import filterBuildings from '../filterBuildings.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const modal = new Modal({
            onAdd: (newBuilding) => {
                buildings.unshift(newBuilding);
                buildingList.update({ buildings });
                filter.update();
            }
        });
        
        const modalDOM = modal.render();
        main.appendChild(modalDOM);


        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterBuildings(buildings, filter);
                buildingList.update({ buildings: filtered });

            }
        });
        const filterDOM = filter.render();
        main.appendChild(filterDOM);
        
        const buildingList = new BuildingList({ 
            buildings,
            onRemove: (buildingToRemove) => {
                const index = buildings.indexOf(buildingToRemove);
                buildings.splice(index, 1);

                buildingList.update({ buildings });
            }
        });
        const buildingListDOM = buildingList.render();
        main.appendChild(buildingListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;