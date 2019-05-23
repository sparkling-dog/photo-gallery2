import buildings from '../../data/buildings.js';
import Filter from '../components/Filter.js';
import Component from './Component.js';
import Header from './Header.js';
import BuildingList from './BuildingList.js';
import AddImage from './AddImage.js';

import filterBuildings from '../filterBuildings.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const addImage = new AddImage({
            onAdd: (newBuilding) => {
                buildings.unshift(newBuilding);
                buildingList.update({ buildings });
            }
        });
        
        const addImageDOM = addImage.render();
        main.appendChild(addImageDOM);

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