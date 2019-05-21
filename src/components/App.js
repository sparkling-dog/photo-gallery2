import Component from './Component.js';
import Header from './Header.js';
import BuildingList from './BuildingList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const buildingList = new BuildingList();
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