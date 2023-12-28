import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from '../Styles/StyleSheet.js'
import Toast from 'react-native-root-toast';
import Icon from 'react-native-ico-material-design';

export const Icons = () => {
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
            <Icon name="add-plus-button" height="40" width="40" />
            <Icon name="add-label-button" />
            <Icon name="add-plus-button" height="40" width="40" />
            <Icon name="add-to-queue-button" color="red" />
            <Icon name="add-to-queue-button" colors={{ "#000000": "#FFFFFF" }} />
            <Icon name="add-plus-button" badge="10" />
            <Icon name="add-plus-button" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
            <Icon name="add-label-button" background="circle" />
            <Icon name="add-label-button" background={{ type: "button", color: 'green' }} />
            <Icon name="user-account-box" color="blue" height="40" width="40"/>
        </View>
    )
}
//export default WelcomePage;
