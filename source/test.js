import { document } from './browser';
import { List } from './list';
import { ListItem } from './listItem';
import { Stream } from './stream';

const layout = document.getElementById('layout');

const list1 = new List('Source 1');
const list2 = new List('Target');
const list3 = new List('Source 2');

layout.appendChild(list1.element);
layout.appendChild(list2.element);
layout.appendChild(list3.element);

for (let i = 0; i < 5; i++) {
	createItem(false, 'A' + i, list1);
	createItem(true, 'B' + i, list3);
}

let on = true;
const stream = new Stream();
let button = document.createElement('button');
button.addEventListener('click', () => {
	if (on) {
		stream.stop();
		button.innerText = 'Start';
	} else {
		stream.start();
		button.innerText = 'Stop';
	}
	on = !on;
});
button.innerText = 'Stop';
stream.stream$.subscribe(console.log);
document.body.appendChild(button);

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
