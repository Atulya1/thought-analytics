import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SignUpForm = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRobot, setIsRobot] = useState(true);
    const [optIn, setOptIn] = useState(false);

    const handleSignUp = () => {
        // Implement your sign-up logic here
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.buttonGoogle]}>
                <Text style={styles.buttonText}>Log in with Google</Text>
            </TouchableOpacity>

            <TextInput
                placeholder="Display name"
                value={displayName}
                onChangeText={setDisplayName}
                style={styles.inputField}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.inputField}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.inputField}
            />
            <Text style={styles.passwordInfo}>
                Passwords must contain at least eight characters, including at least 1 letter and 1 number.
            </Text>


            {/* Implement the opt-in checkbox here */}
            <TouchableOpacity
                style={styles.optInContainer}
                onPress={() => setOptIn(!optIn)}
            >
                <View style={styles.checkbox}>
                    {optIn && <View style={styles.checkboxChecked} />}
                </View>
                <Text style={styles.optInText}>
                    Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            <Text style={styles.signUpText}>Have an account? <Text style={styles.linkText}>Login</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    linkText: {
        color: '#007AFF',
        fontWeight: '500',
    },
    oauthButton: {
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    oauthButtonGoogle: {
        backgroundColor: '#4285F4',
    },
    oauthButtonGitHub: {
        backgroundColor: '#333333',
    },
    oauthButtonFacebook: {
        backgroundColor: '#3b5998',
    },
    oauthButtonText: {
        color: '#ffffff',
        fontWeight: '600',
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
        fontSize: 16,
    },
    signUpText: {
        fontSize: 16,
        color: '#000',
        marginTop: 10,
    },
    passwordInfo: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 20,
    },
    captchaContainer: {
        // Placeholder for the reCAPTCHA
        height: 40,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    captchaText: {
        color: '#333333',
        fontSize: 14,
    },
    optInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        height: 10,
        width: 10,
        backgroundColor: '#007AFF',
    },
    optInText: {
        fontSize: 14,
        color: '#666666',
        flex: 1,
    },
    signUpButton: {
        backgroundColor: '#007AFF',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    signUpButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    },
    buttonGoogle: {
        backgroundColor: '#4285F4',
    },
    sortButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    sortButton: {
        // You may need to adjust padding based on your layout and screen size
        paddingHorizontal: 10,
    },
    sortButtonText: {
        fontSize: 14,
        color: '#007aff',
    },
});

export default SignUpForm;
