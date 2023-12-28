import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const questions = [
    { id: '1', title: 'I have created and installed an app using Slack CLI but it says Authentication has not been setup', tags: ['authentication', 'command-line-interface', 'slack-api', 'slack-commands'], author: 'Tim Somerfield', views: '2 views', timeAgo: '54 secs ago' },
    { id: '2', title: 'I have created and installed an app using Slack CLI but it says Authentication has not been setup', tags: ['authentication', 'command-line-interface', 'slack-api', 'slack-commands'], author: 'Tim Somerfield', views: '2 views', timeAgo: '54 secs ago' },
    { id: '3', title: 'I have created and installed an app using Slack CLI but it says Authentication has not been setup', tags: ['authentication', 'command-line-interface', 'slack-api', 'slack-commands'], author: 'Tim Somerfield', views: '2 views', timeAgo: '54 secs ago' },
    { id: '4', title: 'I have created and installed an app using Slack CLI but it says Authentication has not been setup', tags: ['authentication', 'command-line-interface', 'slack-api', 'slack-commands'], author: 'Tim Somerfield', views: '2 views', timeAgo: '54 secs ago' },
    { id: '5', title: 'I have created and installed an app using Slack CLI but it says Authentication has not been setup', tags: ['authentication', 'command-line-interface', 'slack-api', 'slack-commands'], author: 'Tim Somerfield', views: '2 views', timeAgo: '54 secs ago' },
// ... other questions
];

const SortButtons = () => (
    <View style={styles.sortButtonsContainer}>
        <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortButtonText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.sortButtonText}>More</Text>
        </TouchableOpacity>
    </View>
);

const QuestionItem = ({ title, tags, author, views, timeAgo }) => (
    <View style={styles.questionItem}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.tagContainer}>
            {tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
            ))}
        </View>
        <Text style={styles.info}>{author} • {views} • {timeAgo}</Text>
    </View>
);

const QuestionList = () => (
    <FlatList
        data={questions}
        renderItem={({ item }) => <QuestionItem {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={SortButtons}
        style={styles.list}
    />
);

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#fff',
    },
    questionItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#2e2e2e',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    tag: {
        backgroundColor: '#eef',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginRight: 8,
        marginBottom: 8,
        fontSize: 14,
        color: '#0056b3',
    },
    info: {
        fontSize: 12,
        color: '#999',
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

export default QuestionList;
