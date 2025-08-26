import { router } from "expo-router";
import React, { useState} from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View, } from 'react-native';
import { Text, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';


export default function LogIn() {

    function showToast (type: string, error: string){
        Toast.show({
            type: type,
            text1: error,
            position: "top",
            topOffset: 50,
        })
    }

    const   theme={
        colors: {
            primary: '#009688',
            outline: '#999999',
        }
    }

    const [isSignedUp, setIsSignedUp] = useState(false);
    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [error, setError] = useState("");
    
    async function  handleAuth(){
        if (email === "" || password === "") {
            setError("Please fill all fields.")
        }else if (password.length < 8){
            setError("Password cannot be less than 8.")
        }else{
            setError("")
        }
        
        if (error){
            showToast("error", error);
        }

    }


    return(
       <PaperProvider>
        <KeyboardAvoidingView  style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Toast />
            <View>
                <Text style={styles.welcomeText} variant="headlineMedium">
                    {isSignedUp ? "Welcome Back" : "Create Account"}
                </Text>
                <TextInput 
                    label="Email"
                    placeholder="example@gmail.com"
                    keyboardType="email-address"
                    mode="outlined"
                    autoCapitalize="none"
                    style={styles.input}
                    theme={{
                        colors:{
                        primary: '#009688',
                        outline: '#999999',
                        }
                    }}
                    onChangeText={updateEmail}
                />
                <TextInput 
                    label="Password"
                    autoCapitalize="none"
                    mode="outlined"
                    secureTextEntry
                    style={styles.input}
                    theme={{
                        colors:{
                        primary: '#009688',
                        outline: '#999999',
                        }
                    }}
                    onChangeText={updatePassword}
                />  
                <Button style={styles.btn} mode="contained" onPress={()=>{
                        // router.replace("/(tabs)");
                        // router.navigate("/(tabs)");
                        handleAuth();
                }}>{isSignedUp ? "Sign In" : "Sign Up"}</Button>
                <Button textColor="#009688" onPress={()=>{
                        setIsSignedUp(!isSignedUp);
                    }}
                >
                    {isSignedUp ? "Don't have an account? Sign Up." : "Already have an account? Sign In."}
                </Button>
            </View>
        </KeyboardAvoidingView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 15,
    },
    welcomeText:{
        textAlign: 'center',
        marginBottom: 20
    },
    input:{
        marginBottom: 15,
    },
    btn:{
        marginTop: 20,
        backgroundColor: '#009688'
    },
})