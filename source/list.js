import { document } from './browser';

export class List {
	constructor(header) {
		let div = document.createElement('div');
		div.setAttribute('class', 'list');
		
		let listHeader = document.createElement('h3');
		listHeader.setAttribute('class', 'list-header');
		listHeader.innerText = header;
		div.appendChild(listHeader);

		this.element = div;
	}

	add(listItem) {
		this.element.appendChild(listItem.element);
	}
}
