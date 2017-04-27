import { document } from './browser';
import { createList } from './list';
import { createListItem } from './listItem';
import { Stream } from './stream';

const layout = document.getElementById('layout');

const list1 = createList('List 1', layout);
const list2 = createList('List 2', layout);
const list3 = createList('List 3', layout);

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
	let item = createListItem(isOdd, content, list);

	item.element.addEventListener('click', () => {
		item.list.removeChild(item.element);
		list2.appendChild(item.element);
		item.list = list2;
	});
}
