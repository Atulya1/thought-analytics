import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView, Platform
} from 'react-native';
import { userLogin } from "../../service/user-service";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Keyboard, TouchableWithoutFeedback} from "react-native-web";

const initialValue = {
    username: '',
    password: ''
}

const LoginScreen = () => {
    const [user, setUser] = useState(initialValue);
    const { username, password } = user;
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation();
    const onValueChange = (key, value) => {
        setUser({ ...user, [key]: value });
    }

    const addUserDetails = async () => {
        console.log(user)
        const response = await userLogin(user);
        console.log(response);
        if (response.responseCode === 200) {
            console.log(response.responseMessage._id);
            navigation.navigate('ProfileScreen');
        } else {
            setErrorMessage(response.responseMessage);
            alert(response.responseMessage);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100} // Adjust the value as needed
            extraScrollHeight={Platform.OS === 'ios' ? 50 : 0} // Adjust the value as needed
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonGoogle]}
                        >
                            <Text style={styles.buttonText}>
                                Log in with Google
                            </Text>
                        </TouchableOpacity>

                        <TextInput
                            placeholder="Username"
                            value={username}
                            onChangeText={(text) =>
                                onValueChange('username', text)
                            }
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) =>
                                onValueChange('password', text)
                            }
                            secureTextEntry
                            style={styles.input}
                        />

                        <TouchableOpacity
                            onPress={addUserDetails}
                            style={styles.loginButton}
                        >
                            <Text style={styles.loginButtonText}>Log in</Text>
                        </TouchableOpacity>

                        <Text style={styles.signUpText}>
                            Don’t have an account?{' '}
                            <Text style={styles.linkText}>Sign up</Text>
                        </Text>
                        <Text style={styles.signUpText}>
                            Are you an employer?{' '}
                            <Text style={styles.linkText}>
                                Sign up on Talent
                            </Text>
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
       // flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        // Logo size might need to be adjusted depending on your image
        width: 100,
        height: 100,
        marginBottom: 30,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonGoogle: {
        backgroundColor: '#4285F4',
    },
    buttonGithub: {
        backgroundColor: '#333',
    },
    buttonFacebook: {
        backgroundColor: '#3b5998',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    },
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        marginBottom: 10,
    },
    loginButton: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#007AFF',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'center',
    },
    signUpText: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    },
    linkText: {
        color: '#007AFF',
        fontWeight: '500',
    },
});

export default LoginScreen;
