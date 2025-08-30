import React, {useState, useEffect, useContext} from 'react';
import {View, ImageBackground, TouchableOpacity} from 'react-native';
import { Text, TextInput } from 'react-native-paper'

export default  function SignInScreen () {

    return (
        <>
            <View>
                <Text>Welcome Back</Text>
                <TextInput 
                    label="Email"
                    autoCapitalize='none'
                    placeholder='example@email.com'
                />
                <TextInput
                    label="Passw"
                />
            </View>
        </>
    )
}