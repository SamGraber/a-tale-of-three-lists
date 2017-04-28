export function setupItemControl(listItem) {
	listItem.element.addEventListener('click', () => {
		listItem.list.remove(listItem);
		listItem.targetList.add(listItem);
		const target = listItem.targetList;
		listItem.targetList = listItem.list;
		listItem.list = target;
	});
}
