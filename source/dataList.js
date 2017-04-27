import { document } from './browser';
import { List } from './list';
import { Stream } from './stream';
import { ListItem } from './listItem';
import { nextId } from './nextId';

export class DataList {
	constructor(header, isOdd) {
		this._list = new List(header);
		this._stream = new Stream();

		this.element = this._list.element;

		this._stream.stream$.subscribe(() => {
			const id = nextId();
			let item = new ListItem(isOdd, 'Item ' + id);
			item.list = this;
			this.add(item);
		});

		let div = document.createElement('div');
		div.setAttribute('class', 'center')
		this.element.appendChild(div);

		let on = true;
		let button = document.createElement('button');
		button.setAttribute('class', 'btn')
		button.addEventListener('click', () => {
			if (on) {
				this._stream.stop();
				button.innerText = 'Start';
			} else {
				this._stream.start();
				button.innerText = 'Stop';
			}
			on = !on;
		});
		button.innerText = 'Stop';
		div.appendChild(button);
	}

	add(listItem) {
		this._list.add(listItem);
	}
}
