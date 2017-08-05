import { BaseResponse } from '../BaseResponse';
import { User } from '../../../data/model/User';

export class EditUserResponse extends BaseResponse{
	result: User;
}