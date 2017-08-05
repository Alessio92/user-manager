import { BaseRequest } from '../BaseRequest';
import { User } from '../../../data/model/User';

export class CreateUserRequest extends BaseRequest{
	protected user: User;

	public setUser(user: User){
		this.user = user;
	}

	constructor(user: User){
		super('CreateUser');
		this.user = user;
	}
}