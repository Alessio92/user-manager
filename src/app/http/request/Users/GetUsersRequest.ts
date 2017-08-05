import { BaseRequest } from '../BaseRequest';
import { User } from '../../../data/model/User';

export class GetUsersRequest extends BaseRequest{
	
	constructor(){
		super('GetUsers');
	}
}