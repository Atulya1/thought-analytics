import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

const TagListScreen = () => {
    const tagsData = [
        { title: 'javascript', questions: '2521175', askedToday: '202', thisWeek: '1179' },
        { title: 'python', questions: '2178644', askedToday: '298', thisWeek: '1756' },
        { title: 'java', questions: '1912779', askedToday: '132', thisWeek: '643' },
        { title: 'c#', questions: '1609501', askedToday: '111', thisWeek: '611' },
        { title: 'php', questions: '1462973', askedToday: '53', thisWeek: '336' },
        { title: 'android', questions: '1414170', askedToday: '102', thisWeek: '524' },
        { title: 'c++', questions: '1234567', askedToday: '89', thisWeek: '456' }, // Only showing 7 tags as an example
        { title: 'javascript', questions: '2521175', askedToday: '202', thisWeek: '1179' },
        { title: 'python', questions: '2178644', askedToday: '298', thisWeek: '1756' },
        { title: 'java', questions: '1912779', askedToday: '132', thisWeek: '643' },
        { title: 'c#', questions: '1609501', askedToday: '111', thisWeek: '611' },
        { title: 'php', questions: '1462973', askedToday: '53', thisWeek: '336' },
        { title: 'android', questions: '1414170', askedToday: '102', thisWeek: '524' },
        { title: 'c++', questions: '1234567', askedToday: '89', thisWeek: '456' }
    ];
    const TagItem = ({ title, questions}) => (
        <View style={styles.tagItem}>
            <Text style={styles.tagTitle}>{title}</Text>
            <Text style={styles.tagQuestions}>{questions} questions</Text>
        </View>
    );
    const SortButtons = () => (
        <View style={styles.sortButtonsContainer}>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("all")}>
                <Text style={styles.sortButtonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("newest")}>
                <Text style={styles.sortButtonText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("active")}>
                <Text style={styles.sortButtonText}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("unanswered")}>
                <Text style={styles.sortButtonText}>Unanswered</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Tags</Text>
                <Text style={styles.headerSubtitle}>A tag is a keyword or label that categorizes your question with other, similar questions.</Text>
                <TextInput style={styles.searchInput} placeholder="Filter by tag name" />
            </View>
            <View style={styles.tagsContainer}>
                {tagsData.map((tag, index) => (
                    <TagItem
                        key={index}
                        title={tag.title}
                        questions={tag.questions}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: 'grey',
        marginBottom: 16,
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 16,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 8,
    },
    tagItem: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 4,
        margin: 4,
        width: '30%', // Adjust the width accordingly for three items per row
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tagTitle: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    tagQuestions: {
        fontSize: 14,
        marginBottom: 4,
    },
    tagAsked: {
        fontSize: 14,
        color: 'grey',
    },
});

export default TagListScreen;
