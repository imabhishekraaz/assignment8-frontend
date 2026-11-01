class Token{
    async saveToken(token){
        localStorage.setItem("token", token);
    };
};

export const token = new Token();