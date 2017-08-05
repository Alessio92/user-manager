export class BaseRequest{
	/*
	 * By default should be './', so the same host
	 */
	private baseendpointservice = 'http://crazyfrog92.altervista.org/api/UAM/service.php?service=';
	/* This parameter rappresent the request endpoint,
	 * and must be set on constructor
	 */
	protected endpoint: string;

	public getEndpoint(): string{
		return this.endpoint;
	}

	/* This parameter rappresent the request timeout,
	 * by default is set to seconds
	 * This parameter is set in seconds
	 */
	protected timeout: number = 10;

	constructor(endpoint: string){
		this.endpoint = this.baseendpointservice + endpoint;
	}
}