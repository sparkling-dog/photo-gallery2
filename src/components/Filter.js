import Component from './Component.js';

class Filter extends Component {

    renderTemplate() {

        return /*html*/ `
            <section class="filter-section">
                Search: <input class="filter" name="filter" placeholder="👁👁">
            </section>
        `;
    }
}

export default Filter;