import Component from './Component.js';
import AddImage from './AddImage.js';

class Modal extends Component {

    render() {
        const dom = this.renderDOM();
        const modal = dom.querySelector('div');
        const modalDiv = modal.querySelector('div');
        const button = dom.querySelector('button');
        const span = dom.querySelector('span');
        const onAdd = this.props.onAdd;

        button.addEventListener('click', () => {
            modal.style.display = 'block';   
        });
        span.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        const addImage = new AddImage({
            onAdd
        });
        
        const addImageDOM = addImage.render();
        modalDiv.insertBefore(addImageDOM, span);
        
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <button id="myBtn">Add Building</button>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <!-- AddImage -->
                        <span class="close">&times;</span>
                        
                    </div>
                </div>
            </div>
        `;
    }
}

export default Modal;