import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Placeholder for logo, replace with your logo import
   // const logo = require('./path-to-your-logo.png');

    const handleLogin = () => {
        // Implement login logic
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
                <Text style={styles.buttonText}>Log in with Google</Text>
            </TouchableOpacity>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.signUpText}>Don’t have an account? <Text style={styles.linkText}>Sign up</Text></Text>
            <Text style={styles.signUpText}>Are you an employer? <Text style={styles.linkText}>Sign up on Talent</Text></Text>
        </View>
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
