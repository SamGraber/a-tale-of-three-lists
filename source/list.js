import { document } from './browser';

export function createList(header, container) {
	let list = {};

	let div = document.createElement('div');
	div.setAttribute('class', 'list');
	container.appendChild(div);
	
	let listHeader = document.createElement('h3');
	listHeader.setAttribute('class', 'list-header');
	listHeader.innerText = header;
	div.appendChild(listHeader);

	list.element = div;

	return list;
}
