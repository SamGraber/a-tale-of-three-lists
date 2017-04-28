import { document } from './browser';
import { DataList } from './dataList';
import { List } from './list';

const layout = document.getElementById('layout');

const target = new List('Target');
const source1 = new DataList('Source 1', false, target);
const source2 = new DataList('Source 2', true, target);

layout.appendChild(source1.element);
layout.appendChild(target.element);
layout.appendChild(source2.element);
