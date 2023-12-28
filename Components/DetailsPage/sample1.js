import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const ForumPost = () => {
    const [newComment, setNewComment] = useState('');
    const [newAnswer, setNewAnswer] = useState('');

    // Dummy data for the forum post
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

    // Placeholder functions to handle adding comments and answers
    const handleAddComment = () => {
        console.log('Adding comment:', newComment);
        // Implement adding comment logic here
        setNewComment(''); // Reset comment input
    };

    const handleAddAnswer = () => {
        console.log('Adding answer:', newAnswer);
        // Implement adding answer logic here
        setNewAnswer(''); // Reset answer input
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
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
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
                        <View style={styles.addCommentContainer}>
                            <TextInput
                                placeholder="Add a comment..."
                                value={newComment}
                                onChangeText={setNewComment}
                                style={styles.input}
                                multiline
                            />
                            <TouchableOpacity onPress={handleAddComment} style={styles.addCommentButton}>
                                <Text style={styles.addCommentButtonText}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                ))}
            </ScrollView>
            {/* Question and Answer components */}
            {/* ... (insert the rest of your components here) */}

            {/* Add Comment Section */}

            {/* Fixed Button for Adding Answer */}
            <View style={styles.fixedBottomContainer}>
                <TextInput
                    placeholder="Add an answer..."
                    value={newAnswer}
                    onChangeText={setNewAnswer}
                    style={styles.input}
                    multiline
                />
                <TouchableOpacity onPress={handleAddAnswer} style={styles.addAnswerButton}>
                    <Text style={styles.addAnswerButtonText}>Post Answer</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
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
    addCommentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    addCommentButton: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    addCommentButtonText: {
        color: 'white',
    },
    fixedBottomContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: 'white',
        padding: 10,
    },
    addAnswerButton: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        alignItems: 'center',
    },
    addAnswerButtonText: {
        color: 'white',
    },
    // ... (insert any additional styles you may need here)
});

export default ForumPost;
