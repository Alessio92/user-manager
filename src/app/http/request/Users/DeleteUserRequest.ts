import { BaseRequest } from '../BaseRequest';
import { User } from '../../../data/model/User';

export class DeleteUserRequest extends BaseRequest{
	userId: number;

	constructor(){
		super('DeleteUser');
	}
}