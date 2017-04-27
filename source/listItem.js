import { document } from './browser';

export class ListItem {
	constructor(isOdd, content) {
		this.isOdd = isOdd;
		this.name = content;

		const classes = isOdd ? 'list-item list-item-odd' : 'list-item';
		let div = document.createElement('div');
		div.setAttribute('class', classes);
		div.innerText = content;

		this.element = div;
	}
}
