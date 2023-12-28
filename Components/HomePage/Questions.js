import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {getAllQuestion, getFilteredQuestions, getFilteredQuestionsByTag} from "../../service/question-service";
import {formatDateMetadata, sortByActive} from "../../service/utils";

const QuestionList = () => {
    const [questions, setQuestions] = useState(null);
    const [sortType, setSortType] = useState('newest');
    const [tagName, setTagName] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        if (tagName === null) {
            getAllQuestion(sortType)
                .then((response) => {
                    setQuestions(response);
                    setTagName(null);
                })
                .catch((error) => {
                    console.error('Error fetching questions:', error);
                }).finally(() => {
                setLoading(false);
            });
        } else {
            console.log(tagName)
            console.log(sortType)
                getFilteredQuestionsByTag(tagName, sortType)
                    .then((r) => {
                        setQuestions(r);
                    })
                    .catch((error) => {
                        console.error('Error fetching tagged search questions questions:', error);
                    }).finally(() => {
                    setLoading(false);
                });
        }
    }, [sortType, tagName])

    const sort = (sortType) => {
        if (sortType === "newest") {
            setSortType("newest")
        } else if (sortType === "active") {
            setSortType("active")
        } else if (sortType === "unanswered") {
            setSortType("unanswered")
        } else if (sortType === "all") {
            setTagName(null);
            setSortType("newest")
        }
    }

    const searchTag = (tagName) => {
        setTagName(tagName);
    }
    const SortButtons = () => (
        <View style={styles.sortButtonsContainer}>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("all")}>
                <Text style={styles.sortButtonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("newest")}>
                <Text style={styles.sortButtonText}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("active")}>
                <Text style={styles.sortButtonText}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("unanswered")}>
                <Text style={styles.sortButtonText}>Unanswered</Text>
            </TouchableOpacity>
        </View>
    );

    const QuestionItem = ({ title, tags, asked_by, views, ask_date_time }) => (
        <View style={styles.questionItem}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.tagContainer}>
                {tags.map((tag) => (
                    <Text key={tag._id} style={styles.tag} onPress={() => searchTag(tag.name)}>{tag.name}</Text>
                ))}
            </View>
            <Text style={styles.info}>{asked_by.username} • {views} • {"asked " + formatDateMetadata(ask_date_time)}</Text>
        </View>
    );

    return (
        <View style={styles.list}>
            <View style={styles.header}>
                <SortButtons/>
                <TextInput style={styles.searchInput} placeholder="Search Question..." />
            </View>
            <FlatList
            data={questions}
            renderItem={({item}) => <QuestionItem {...item} />}
            keyExtractor={(item) => item._id}
            style={styles.list}
        />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 10,
        backgroundColor: '#F0F8FF',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
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
    searchInput: {
        fontSize: 14,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 5,
        marginBottom: 5,
    },
});

export default QuestionList;


