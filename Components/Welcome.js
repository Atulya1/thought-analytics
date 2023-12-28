import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from '../Styles/StyleSheet.js'
import Toast from 'react-native-root-toast';
import Icon from 'react-native-ico-material-design';

export const WelcomePage = () => {
    const showToast = (message) => {
        console.log(message);
        Toast.show(
            message, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0
            }
        )
    }
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to Thought Analytics</Text>
                <StatusBar style="auto"/>
                <TouchableOpacity style={styles.button} onPress={() => showToast("Continuing as guest user")}>
                    <Text style={{color: '#fff'}}>Guest User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => showToast("Opening login page")}>
                    <Text style={{color: '#fff'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => showToast("Opening sign up page")}>
                    <Text style={{color: '#fff'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
}
//export default WelcomePage;
