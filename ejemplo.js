/**
 * Created by victor on 05/08/16.
 */
var User = (function () {
    function User(id, name, email, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.hobbies = hobbies;
    }
    return User;
})();
var user = new User(1, "iparra", "iparra@mail.com", ["Family", "Program"]);
console.log(user);
//# sourceMappingURL=ejemplo.js.map