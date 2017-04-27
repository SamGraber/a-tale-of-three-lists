import { document } from './browser';
import { nextId } from './nextId';

export function createListItem(isOdd, content, list) {
	let item = {
		id: nextId(),
		isOdd,
		name: content,
		list,
	};

	const classes = isOdd ? 'list-item list-item-odd' : 'list-item';
	let div = document.createElement('div');
	div.setAttribute('class', classes);
	div.innerText = content;
	list.element.appendChild(div);

	item.element = div;

	return item;
}
