import { document } from './browser';
import { List } from './list';
import { Stream } from './stream';
import { ListItem } from './listItem';
import { setupItemControl } from './itemControl';
import { nextId } from './nextId';

export class DataList {
	constructor(header, isOdd, target) {
		this._list = new List(header);
		this._stream = new Stream();

		this.element = this._list.element;

		this._stream.stream$.subscribe(() => {
			const id = nextId();
			let item = new ListItem(isOdd, 'Item ' + id);
			item.list = this;
			item.targetList = target;
			setupItemControl(item);
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

	remove(listItem) {
		this._list.remove(listItem);
	}
}
