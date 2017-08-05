export class Utils{

	static getRandomString(howManyChars: number = 15): string{
		let text = '';
		let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		let chars = Math.max(howManyChars, 3 + Math.random() * howManyChars);

		for (let i = 0; i < chars; i++){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
}