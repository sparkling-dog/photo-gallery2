import Component from './Component.js';

class Modal extends Component {

    render() {
        const dom = this.renderDOM();
        const modal = dom.querySelector('div');
        const button = dom.querySelector('button');
        const span = dom.querySelector('span');
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            
        });
        span.addEventListener('click', () => {
            modal.style.display = 'none';

        });
        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <button id="myBtn">Add Building</button>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Some Text Hello :)</p>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Modal;