import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/** An example database that the data source uses to retrieve data for the table. */
export abstract class DBTable<T> {

	/** Stream that emits whenever the data has been modified. */
	dataChange: BehaviorSubject<Array<T>> = new BehaviorSubject<Array<T>>([]);
	
	get data(): Array<T>
	{
		return this.dataChange.value;
	}

	count(): number {
		return this.data.length;
	}

	/** Adds a new user to the database. */
	add(newData: T) {
		const copiedData = this.data.slice();
		copiedData.push(newData);
		this.dataChange.next(copiedData);
	}

	removeByProperty(property: string, value: any){
		const copiedData = this.data.slice();
		let filteredData = copiedData.filter((item) =>{
			return item[property] != value;
		});
		this.dataChange.next(filteredData);
	}

	/** Adds a new users to the database. */
	addAll(newDatas: T[]) {
		const copiedData = this.data.slice();
		this.dataChange.next(copiedData.concat(newDatas));
	}

	/** Get entity by property **/
	getEntityByProperty(property: string, value: any): T{
		var result = this.data.filter((entity: T) => {
			return entity[property] == value;
		});
		if(result.length > 0){
			return result[0];
		}
		return null;
	}

	updateByProperty(property: string, value: any, updatedObject){		
		const copiedData = this.data.slice().map((entity: T) =>{
			if(entity[property] == value){
				return updatedObject;
			}
			return entity;
		});
		this.dataChange.next(copiedData);
	}

	protected getNewTEntity(type: new() => T): T
	{
		return new type();
	}

	abstract generateRandomData(howMany: number);
}