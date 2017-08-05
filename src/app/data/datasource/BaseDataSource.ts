import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { DBTable } from '../database/DBTable';

export class BaseDataSource<T> extends DataSource<any>{
	constructor(private _dbTable: DBTable<T>) {
		super();
	}

	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<T[]> {
		return this._dbTable.dataChange;
	}
	disconnect() {}
}