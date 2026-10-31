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

    async registerUser(details){
        const data = await axios.post(`${API}/register`, details);
        return data;
    };

    async verifyUser(token){
        const data = await axios.get(`${API}/verify`,{
            headers: {
                Authorization: token
            }
        })
        return data;
    }
};

export const user = new User();