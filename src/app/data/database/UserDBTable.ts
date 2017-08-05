import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DBTable } from './DBTable';

import { User } from '../../data/model/User';

import { Utils } from '../../utils/Utils';

export class UserDBTable extends DBTable<User> {

	/** Get entity by property **/
	getUserById(value: number): User{
		return this.getEntityByProperty('id', value);
	}
	
	generateRandomData(howMany: number = 20){
		for(var i=0; i<howMany; i++){
			let user: User = new User();
			user.id = i;
			user.email = Utils.getRandomString(15);
			user.name = Utils.getRandomString();
			user.surname = Utils.getRandomString();

			this.add(user);
		}
	}
}