export class User{
    #email;
    #tel;
    #role;
    #name;
    constructor(name,role,email,tel){
        this.#name = name;
        this.#role = role;
        this.#email = email;
        this.#tel = tel;
    };
    getName(){
        return this.#name;
    }
    getEmail(){
        return this.#email;
    }
    getRole(){
        return this.#role;
    }
    getTel(){
        return this.#tel;
    }
    getAllDetails(){
        return {
            name:this.#name,
            role: this.#role,
            email : this.#email,
            tel: this.#tel
        };
    };
}