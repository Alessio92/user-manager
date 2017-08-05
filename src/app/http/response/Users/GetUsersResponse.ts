import { BaseResponse } from '../BaseResponse';
import { User } from '../../../data/model/User';

export class GetUsersResponse extends BaseResponse{
	result: User[];
}