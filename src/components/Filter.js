import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        input.addEventListener('input', () => {
            this.props.onFilter({
                text:input.value
            });
        });
        return dom;
    }
    renderTemplate() {

        return /*html*/ `
            <section class="filter-section">
                Search: <input class="filter" name="filter" placeholder="👁👁">
            </section>
        `;
    }
}

export default Filter;