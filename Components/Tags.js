import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {getAllTags, getAllTagsWithQuestionCount} from "../service/tag-service.js";

const TagListScreen = () => {
    const [tags, setTags] = useState(null);
    const [sortType, setSortType] = useState("all")
    const [loading, setLoading] = useState(true)
    const [render, setRender] = useState("render")
    useEffect(() => {
        setLoading(true);
        if(sortType === "all") {
            getAllTagsWithQuestionCount()
                .then((response) => {
                    setTags(response);
                })
                .catch((error) => {
                    console.error('Error fetching questions:', error);
                }).finally(() => {
                setLoading(false);
            });
        } else if (sortType === "name") {
            const sortedTagsByName = [...tags].sort((a, b) => a.name.localeCompare(b.name));
            setTags(sortedTagsByName);
        } else if (sortType === "popular") {
            const sortedTagsByPopularity = [...tags].sort((a, b) => b.questions - a.questions);
            setTags(sortedTagsByPopularity);
        }
    }, [render, sortType])

    const TagItem = ({ name, questions}) => (
        <View style={styles.tagItem}>
            <Text style={styles.tagTitle}>{name}</Text>
            <Text style={styles.tagQuestions}>{questions} questions</Text>
        </View>
    );

    const sort = (sortType) => {
        console.log(sortType)
        if (sortType === "popular") {
            setSortType("popular");
        } else if (sortType === "name") {
            setSortType("name")
        } else if (sortType === "all") {
            setSortType("all");
        }
    }
    const SortButtons = () => (
        <View style={styles.sortButtonsContainer}>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("all")}>
                <Text style={styles.sortButtonText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("popular")}>
                <Text style={styles.sortButtonText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortButton} onPress={() => sort("name")}>
                <Text style={styles.sortButtonText}>Name</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SortButtons/>
                <TextInput style={styles.searchInput} placeholder="Filter by tag name" />
            </View>
        <ScrollView>

            <View style={styles.tagsContainer}>
                {tags !=null ? tags.map((tag) => (
                    <TagItem
                        key={tag._id}
                        name={tag.name}
                        questions={tag.questions}
                    />
                )) : ""}
            </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 10,
        backgroundColor: '#F0F8FF',
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
        fontSize: 14,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 5,
        marginTop: 5,
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

export default TagListScreen;
