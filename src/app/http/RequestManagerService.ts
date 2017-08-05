import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/bufferCount"

// region Utils
import { Constants } from './Constants';
// endregion Utils 

// region Request
import { BaseRequest } from './request/BaseRequest';
// endregion Request

// region Response
import { BaseResponse } from './response/BaseResponse';
// endregion Response


@Injectable()
export class RequestManagerService{
	constructor(private http: Http) {}

	private validateData(data: BaseResponse): boolean{
		return data.status == Constants.SUCCESSFUL_RESULT;
	}

	public Send(request: BaseRequest = new BaseRequest('error.php')): Observable<BaseResponse>{
		let result = this.http
		.post(request.getEndpoint(), JSON.stringify(request))
		.map((responseData) => {
			let jsonResponse = responseData.json();
			let isValid = this.validateData(jsonResponse);

			if(isValid){
				return jsonResponse;
			}

			return Observable.throw("JSON Response is invalid");
		});

		return result;
	}
}