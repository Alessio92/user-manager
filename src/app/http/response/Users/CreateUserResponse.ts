import { BaseResponse } from '../BaseResponse';
import { User } from '../../../data/model/User';

export class CreateUserResponse extends BaseResponse{
	result: User;
}