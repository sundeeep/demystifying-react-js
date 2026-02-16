import { Account, ID } from "appwrite";
import appwriteClient from ".";

class AppwriteAccount {
    constructor() {
        this.appwriteAccount = new Account(appwriteClient)
    }

    async createNewUser(data){
        const newUser = await this.appwriteAccount.create({
            userId: ID.unique(),
            ...data
        });
        return newUser;
    }

    async logInWithEmailAndPassword(data){
        const loggedInUserSession = await this.appwriteAccount.createEmailPasswordSession({
            ...data
        });
        return loggedInUserSession;
    }

    async getCurrentUser() {
        const currentUser = await this.appwriteAccount.get();
        return currentUser;
    }

    async logOutCurrentUser() {
        const logoutResponse = await this.appwriteAccount.deleteSession({
            sessionId: "current"
        });
        return logoutResponse;
    }

}

export default AppwriteAccount;