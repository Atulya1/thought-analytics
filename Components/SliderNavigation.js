import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

export default class SliderNavigation extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}} >
                        <Text style={styles.text}>{this.props.name} screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
})