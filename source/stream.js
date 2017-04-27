import { Observable, Subject } from 'rxjs/Rx';

export class Stream {
	constructor() {
		this._stream = new Subject;
		this.stream$ = this._stream.asObservable();
		this.start();
	}

	start() {
		this._subscription = Observable.interval(1000).subscribe(this._stream);
	}
	
	stop() {
		this._subscription.unsubscribe();
		this._subscription = null;
	}
}
