import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from '../Styles/StyleSheet.js'
import Toast from 'react-native-root-toast';
import {useState} from "react";
export const Taps = () => {
    const [value, setValue] = useState(0);
    const [taps, setTaps] = useState(0)

    const increaseCounter = () => {
        setValue(value + 1);
        setTaps(taps + 1)
        Toast.show(
            "counter increased", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0
            }
        )
    }

    const decreaseCounter = () => {
        setValue(value - 1);
        setTaps(taps + 1)
        Toast.show(
            "counter decreased", {
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
            <Text style={styles.text}>Counter : {value}</Text>
            <Text style={styles.text}>Taps : {taps}</Text>
            <StatusBar style="auto"/>
            <TouchableOpacity style={styles.button} onPress={() => increaseCounter()}>
                <Text style={{color: '#fff'}}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => decreaseCounter()}>
                <Text style={{color: '#fff'}}>Decrease</Text>
            </TouchableOpacity>
        </View>
    )
}
