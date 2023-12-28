import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Questions from "../HomePage/Questions";

const UserProfile = () => {

    // You would typically fetch this data from an API or your state management store
    const userData = {
        name: 'Atul Kumar',
        handle: '@atul2012atul',
        location: 'Delhi, India',
        birthdate: 'Born April 14, 1996',
        joinDate: 'Joined April 2013',
        followingCount: 37,
        followersCount: 9,
        profileImage: 'atul.JPG', // replace with actual image path or URL
        // ... other user data
    };

    const post = {
        author: 'Atul Kumar',
        handle: '@atul2012atul',
        date: 'Sep 16',
        content: "I'm attending React Summit US 2023 - get your free remote ticket and join me there with 1500 other engineers and 60+ great speakers #ReactSummitUS",
        linkTitle: 'Check out my badge & claim your free React Summit US 2023 ticket',
        link: 'portal.gitnation.org/badges/react-s...',
        // ... other post data
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: './atul.JPG' }} style={styles.profileImage} />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.handle}>{userData.handle}</Text>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileButtonText}>Edit profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.userDetails}>
                <Text style={styles.detailText}>{userData.location}</Text>
                <Text style={styles.detailText}>{userData.birthdate}</Text>
                <Text style={styles.detailText}>{userData.joinDate}</Text>
                <View style={styles.followInfo}>
                    <Text style={styles.followCount}>{userData.followingCount} Following</Text>
                    <Text style={styles.followCount}>{userData.followersCount} Followers</Text>
                </View>
            </View>

            {/* Tabs for Posts, Replies, etc. */}
            {/* ... (tabs component here) */}

            {/* Post Content */}
            <View style={styles.postContainer}>
                <Text style={styles.postAuthor}>{post.author} {post.handle} • {post.date}</Text>
                <Text style={styles.postContent}>{post.content}</Text>
                <Text style={styles.postLink}>{post.linkTitle}</Text>
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
