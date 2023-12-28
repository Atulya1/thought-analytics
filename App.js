import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {ProfileScreen, QuestionsScreen, TagsScreen, LogoutScreen, SignUpScreen, TagListScreen} from "./Components";
import {WelcomePage} from "./Components/Welcome";
import { RootSiblingParent } from 'react-native-root-siblings';
import SignUp from "./Components/User/SignUpComponent";
import SignUpForm from "./Components/User/SignUpComponent";
import LoginComponent from "./Components/User/LoginComponent";
import ForumPost from "./Components/DetailsPage/DetailsComponent";
import UserProfile from "./Components/User/ProfileComponent";
import {useEffect} from "react";
import {connectTest} from "./service/question-service";
import Tags from "./Components/Tags";
import TagsList from "./Components/Tags";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={WelcomePage} />
                <Drawer.Screen name="Profile" component={UserProfile} />
                <Drawer.Screen name="Questions" component={QuestionsScreen} />
                <Drawer.Screen name="Tags" component={ForumPost} />
                <Drawer.Screen name="TagListScreen" component={TagListScreen} />
                <Drawer.Screen name="SignUp" component={SignUpForm} />
                <Drawer.Screen name="Logout" component={WelcomePage} />
                <Drawer.Screen name="Login" component={LoginComponent} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}