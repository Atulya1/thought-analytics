import React from "react";
import SliderNavigation from "./SliderNavigation";
import SignUp from "./User/SignUpComponent";
import QuestionList from "./HomePage/Questions";
import TagsList from "./Tags";
import Logout from "./User/Logout";
import AskQuestions from "./AskQuestions";

export const ProfileScreen = ({navigation}) => <SliderNavigation navigation={navigation} name="Profile" />
export const LogoutScreen = ({navigation}) => <Logout navigation={navigation} name="Logout" />
export const QuestionsScreen = ({navigation}) => <QuestionList navigation={navigation} name="Questions" />
export const TagsScreen = ({navigation}) => <SliderNavigation navigation={navigation} name="Tags" />
export const SignUpScreen = ({navigation}) => <SignUp navigation={navigation} name="Signup" />
export const TagListScreen = ({navigation}) => <TagsList navigation={navigation} name="TagList" />

export const AskQuestionScreen = ({navigation}) => <AskQuestions navigation={navigation} name="AskQuestions" />
