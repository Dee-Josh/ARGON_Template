import React, {useState, useEffect, useContext} from 'react';
import {View, KeyboardAvoidingView, ImageBackground, TouchableOpacity} from 'react-native';
import { Text, TextInput } from 'react-native-paper'

export default  function SignInScreen () {

    return (
        <>
            <KeyboardAvoidingView>
                <View>
                    <Text>Welcome Back</Text>
                    <TextInput 
                        label="Email"
                        autoCapitalize='none'
                        placeholder='example@email.com'
                        mode='outline'
                    />
                    <TextInput
                        label="Password"
                        autoCapitalize='none'
                        secureTextEntry
                        mode='outline'
                    />
                    <Button mode='contained'>

                    </Button>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}