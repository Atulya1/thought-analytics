import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ForumPost = () => {


    const dummyData = {
        question: {
            title: 'Why does Apple use Objective-C?',
            content: 'It seems strange to me that they would not have chosen a language more popular than Objective-C...',
            metaData: { asked: '14 years, 4 months ago', viewed: '16k times' },
            score: 33,
            comments: [
                { content: 'This is a comment on the question.', score: 3 },
                // ... more comments
            ],
        },
        answers: [
            {
                content: 'Apple merged with NeXT in the \'90s and Mac OS X was made from NeXT\'s operating system, NeXTSTEP...',
                score: 55,
                comments: [
                    { content: 'This is a comment on the answer.', score: 5 },
                    // ... more comments
                ],
            },
            // ... more answers
        ],
    };

    const renderVoteButtons = (score) => (
        <View style={styles.voteContainer}>
            <TouchableOpacity style={styles.voteButton}>
                <Text style={styles.voteText}>▲</Text>
            </TouchableOpacity>
            <Text style={styles.score}>{score}</Text>
            <TouchableOpacity style={styles.voteButton}>
                <Text style={styles.voteText}>▼</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{dummyData.question.title}</Text>
            {renderVoteButtons(dummyData.question.score)}
            <Text style={styles.content}>{dummyData.question.content}</Text>
            <Text style={styles.metaData}>
                Asked {dummyData.question.metaData.asked} • Viewed {dummyData.question.metaData.viewed}
            </Text>
            {/* Question comments */}
            {dummyData.question.comments.map((comment, index) => (
                <View key={index} style={styles.commentContainer}>
                    {renderVoteButtons(comment.score)}
                    <Text style={styles.commentContent}>{comment.content}</Text>
                </View>
            ))}
            {/* Answers */}
            {dummyData.answers.map((answer, index) => (
                <View key={index} style={styles.answerContainer}>
                    {renderVoteButtons(answer.score)}
                    <Text style={styles.content}>{answer.content}</Text>
                    {/* Answer comments */}
                    {answer.comments.map((comment, commentIndex) => (
                        <View key={commentIndex} style={styles.commentContainer}>
                            {renderVoteButtons(comment.score)}
                            <Text style={styles.commentContent}>{comment.content}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    metaData: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 20,
    },
    voteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    voteButton: {
        padding: 10,
    },
    voteText: {
        fontSize: 18,
    },
    score: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 5,
    },
    answerContainer: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: 10,
        paddingTop: 10,
    },
    commentContainer: {
        paddingLeft: 20,
        marginTop: 10,
    },
    commentContent: {
        fontSize: 14,
        color: 'grey',
    },

});

export default ForumPost;
