import { document } from './browser';
import { createListItem } from './listItem';

const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');

for (let i = 0; i < 5; i++) {
	createItem(false, 'A' + i, list1);
	createItem(true, 'B' + i, list3);
}

function createItem(isOdd, content, list) {
	let item = createListItem(isOdd, content, list);

	item.element.addEventListener('click', () => {
		item.list.removeChild(item.element);
		list2.appendChild(item.element);
		item.list = list2;
	});
}
