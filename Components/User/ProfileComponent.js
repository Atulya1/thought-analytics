import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Questions from "../HomePage/Questions";
import {getAllQuestion, getFilteredQuestionsByTag} from "../../service/question-service";
import {getCurrentUserAccount} from "../../service/user-service";
import {formatDateMetadata} from "../../service/utils";

const UserProfile = () => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        getCurrentUserAccount().then((response) => {
            if(response.responseCode === 200) {
                setUser(response.responseMessage)
            }
        })
    }, [])

    const calculateDays = (time) => {
        const registrationDate = new Date(time);
        const currentDate = new Date();
        return Math.floor((currentDate - registrationDate) / (24 * 60 * 60 * 1000));
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./atul.jpeg')} style={styles.profileImage} />
                <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
                <Text style={styles.handle}>{user.username}</Text>
                {/*<TouchableOpacity style={styles.editProfileButton}>*/}
                {/*    <Text style={styles.editProfileButtonText}>Edit profile</Text>*/}
                {/*</TouchableOpacity>*/}
            </View>

            <View style={styles.userDetails}>
                <Text style={styles.detailText}>Joined : {formatDateMetadata(user.registration_date_time)}</Text>
                <Text style={styles.detailText}>Number of days as a member: {calculateDays(user.registration_date_time)} days </Text>
                {/*<View style={styles.followInfo}>*/}
                {/*    <Text style={styles.followCount}>{userData.followingCount} Following</Text>*/}
                {/*    <Text style={styles.followCount}>{userData.followersCount} Followers</Text>*/}
                {/*</View>*/}
            </View>

            <View style={styles.sortButtonsContainer}>
                <TouchableOpacity style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortButton}>
                    <Text style={styles.sortButtonText} onPress={() => fetchQuestions()}>Tags</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>Answers</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 8,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 4,
    },
    handle: {
        color: 'grey',
        marginBottom: 12,
    },
    editProfileButton: {
        borderWidth: 1,
        borderColor: '#1DA1F2',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    editProfileButtonText: {
        color: '#1DA1F2',
    },
    userDetails: {
        padding: 20,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 4,
    },
    followInfo: {
        flexDirection: 'row',
        marginTop: 8,
    },
    followCount: {
        fontSize: 16,
        marginRight: 16,
    },
    postContainer: {
        padding: 20,
    },
    postAuthor: {
        fontWeight: 'bold',
    },
    postContent: {
        fontSize: 16,
        marginVertical: 8,
    },
    postLink: {
        color: '#1DA1F2',
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
    // ... (add any additional styles you may need here)
});

export default UserProfile;
