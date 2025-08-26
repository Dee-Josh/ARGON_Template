import { createContext } from "react";


const AuthContext = createContext();

export function AuthProvider(props){

    // FOR SIGNING UP NEW USER
    const signUp = async (email, password) => {
        try{
            await account.create(ID.unique(), email, password);
            await signIn(email, password); // To automatically sign in user after signing up.
            return null
        } catch(error){
            if (error instanceof Error){ //If the error is an error recognised as part of Javascript Errors
                return error.message;
            }
            return "An error occured during signup";
        }
    }

    // FOR SIGNING IN EXISTING USER 
    const signIn = async (email, password) => {
        try{
            await account.createEmailPasswordSession(email, password);
            return null
        } catch(error){
            if (error instanceof Error){ //If the error is an error recognised as part of Javascript Errors
                return error.message;
            }
            return "An error occured during signin";
        }
    }

    return<>
        <AuthContext.Provider value={{ current: user, signUp, SignIn}}>
            {props.children}
        </AuthContext.Provider>
    </>
}