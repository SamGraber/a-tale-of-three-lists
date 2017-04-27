import { document } from './browser';
import { createListItem } from './listItem';
import { Stream } from './stream';

const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');

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
