import Component from './Component.js';

class AddImage extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newBuilding = {
                src: formData.get('url'),
                title: formData.get('title'),
                location: formData.get('location'),
                century: formData.get('century')
            };

            onAdd(newBuilding);

            form.reset();
            document.activeElement.blur();

        });
        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form class="addImage">
                <label>Image URL: <input src="" class="image" type="text" name="url"></label>
                <label>Title: <input class="image" type="text" name="title"></label>
                <label>Location: <input class="image" type="text" name="location"></label>
                <label>Century: <input class="image" type="text" name="century"></label>

                <button>Submit</button>
            </form>
        `;
    }
}

export default AddImage;