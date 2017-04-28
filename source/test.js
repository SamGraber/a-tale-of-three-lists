import { document } from './browser';
import { DataList } from './dataList';
import { List } from './list';
import { ListItem } from './listItem';
import { Stream } from './stream';

const layout = document.getElementById('layout');

const list2 = new List('Target');
const list1 = new DataList('Source 1', false, list2);
const list3 = new DataList('Source 2', true, list2);

layout.appendChild(list1.element);
layout.appendChild(list2.element);
layout.appendChild(list3.element);

// for (let i = 0; i < 5; i++) {
// 	createItem(false, 'A' + i, list1);
// 	createItem(true, 'B' + i, list3);
// }

function createItem(isOdd, content, list) {
	let item = new ListItem(isOdd, content);
	item.list = list;
	list.add(item);

	item.element.addEventListener('click', () => {
		item.list.removeChild(item.element);
		list2.appendChild(item.element);
		item.list = list2;
	});
}
