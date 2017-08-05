export class User {
	/*
     * The ID
     */
    public static ID_FIELD = 'id';
    id: number;
    /*
     * The Email
     */
    public static EMAIL_FIELD = 'email';
    email: string;
    /*
     * The Name
     */
    public static NAME_FIELD = 'name';
    name: string;
    /*
     * The Surname
     */
    public static SURNAME_FIELD = 'surname';
    surname: string;
    /*
     * The Password
     */
    public static PASSWORD_FIELD = 'password';
    password: string;

    static getHeaders(): string[]{
        return [User.NAME_FIELD, User.SURNAME_FIELD, User.EMAIL_FIELD];
    }


    constructor(){
        this.id = 0;
    }
}