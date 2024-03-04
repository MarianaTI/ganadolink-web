import IUserRepo from "@/domain/repositories/IUserRepo";
import axios from "axios";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

class UserRepo extends IUserRepo {
  constructor() {
    super();
    this.url = "http://localhost:3000/api/users";
    this.urlSignIn = "http://localhost:3000/api/signin";

    this.urlSignUp = "http://localhost:3000/api/signup";


  }

  async getAll() {
    const encryptedToken = Cookies.get("authToken");
    const bytes = CryptoJS.AES.decrypt(encryptedToken, "cookie-encrypted");
    const token = bytes.toString(CryptoJS.enc.Utf8);

    const response = await axios.get(this.url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return response.data;
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

  async signUp(user){
    try {
      const response = await axios.post(this.urlSignUp, user,{
        headers: {
          "Content-Type": "application/json"
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error signUp:", error.message);
    }
  }
}

export default UserRepo;
