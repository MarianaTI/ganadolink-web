import IUserRepo from "@/domain/repositories/IUserRepo";
import axios from "axios";

class UserRepo extends IUserRepo {
    constructor(id_user) {
        super();
        this.id_user = id_user;
        this.urlSignIn = "http://localhost:3000/signin";
    }

    async signIn(user) {
        try {
            const response = await axios.post(this.urlSignIn, user, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data && response.data._id) {
                return response.data;
            } else {
                throw new Error("Invalid credentials or unexpected server response");
            }
        } catch (error) {
            console.error("Error signing in:", error.message);
            throw error;
        }
    }
} 

export default UserRepo;