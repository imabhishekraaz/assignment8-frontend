import axios from 'axios';
// API Key URL
const API =  "http://localhost:4000/api/v1";

class User{

    /*  
        Call the Login API
        We need the telephone and password from the user
    */
    async login(loginDetails){
        const data = await axios.post(`${API}/login`, loginDetails);
        return data;
    };

    /*
        Regsiter the User
        Details: name, telephone, email, password
    */
    async registerUser(details){
        const data = await axios.post(`${API}/register`, details);
        return data;
    };

    /*
        Verify the token
        Details: Token from the localstorage
    */
    async verifyUser(token){
        const data = await axios.post(`${API}/auth/verify`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data;
    }
};

export const user = new User();