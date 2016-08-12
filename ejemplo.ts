/**
 * Created by victor on 05/08/16.
 */

class User
{
    id: number;
    name: string;
    email: string;
    hobbies: Array<string>;

    constructor(id: number, name: string, email: string, hobbies: Array<string>)
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hobbies = hobbies;
    }
}
var user = new User(1, "iparra", "iparra@mail.com", ["Family", "Program"]);
console.log(user);