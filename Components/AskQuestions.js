import React, {useState, useEffect} from "react";
import { parseStringForUrl } from "../service/utils";
import { saveQuestion } from '../service/question-service';
import {getCurrentUserAccount} from "../service/user-service";
import {ScrollView, TextInput, View, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {green} from "react-native-reanimated/src";

const AskQuestions = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [tagString, setTagString] = useState("");
    const [user, setUser] = useState("");
    const [emptyTitle, setEmptyTitle] = useState(false);
    const [longTitle, setLongTitle] = useState(false);
    const [emptyText, setEmptyText] = useState(false);
    const [longTags, setLongTags] = useState(false);
    const [manyTags, setManyTags] = useState(false);
    const [emptyTags, setEmptyTags] = useState(false);
    const [invalidUrl, setInvalidUrl] = useState(false);
    // eslint-disable-next-line no-unused-vars
    //const [existingTags, setExistingTags] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        getCurrentUserAccount().then((response) => {
            console.log(response);
            if(response.responseCode === 200) {
                console.log(response.responseMessage._id)
                setUser(response.responseMessage._id)
            } else {
                alert(response.responseMessage)
            }
        })
    },[])

    function createQuestion() {
        if(!title) {
            setEmptyTitle(true);
            return null;
        } else if(title.length > 100) {
            setLongTitle(true);
            return null;
        } else if(!text) {
            setEmptyText(true);
            return null;
        } else if(tagString.split(" ").length > 5) {
            setManyTags(true);
            return null;
        } else {
            const tags = tagString.split(" ");
            var tooLong = false;
            var emptyTag = false;
            tags.forEach(t => {
                if(t.length > 20) {
                    tooLong = true;
                } else if (t.length === 0) {
                    emptyTag = true;
                }
            });
            if(tooLong) {
                setLongTags(true);
                return null;
            }
            if(emptyTag) {
                setEmptyTags(true)
                return null;
            }
        }

        const tags = tagString.split(" ");

        const urlParsedText = parseStringForUrl(text);
        if(!urlParsedText) {
            setInvalidUrl(true);
            return null;
        }

        const question = {
            title: title,
            text: urlParsedText,
            tags: tags,
            answers: [],
            comments: [],
            asked_by: user,
            ask_date_time: new Date(),
            views: 0,
            votes: 0,
            pinned_answer: ""
        }
        saveQuestion(question).then((response) => {
            if (response.responseCode === 200) {
                navigation.navigate("Questions")
            } else {
                alert(response.responseMessage)
            }
        });
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Question Title</Text>
                <Text style={styles.labelDescription}>Limit to 100 characters or less</Text>
                <TextInput
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    style={styles.input}
                    placeholder="Enter question title"
                />
                {emptyTitle && <Text style={styles.error}>Title cannot be empty</Text>}
                {longTitle && <Text style={styles.error}>Title cannot be more than 100 characters</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Question Text</Text>
                <Text style={styles.labelDescription}>Add details</Text>
                <TextInput
                    onChangeText={(text) => setText(text)}
                    value={text}
                    style={[styles.input, styles.textArea]}
                    placeholder="Enter question text"
                    multiline
                />
                {emptyText && <Text style={styles.error}>Question text cannot be empty</Text>}
                {invalidUrl && <Text style={styles.error}>Invalid hyperlink</Text>}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Tags</Text>
                <Text style={styles.labelDescription}>Add keywords separated by whitespace</Text>
                <TextInput
                    onChangeText={(text) => setTagString(text)}
                    value={tagString}
                    style={styles.input}
                    placeholder="Enter tags"
                />
                {longTags && <Text style={styles.error}>New tag length cannot be more than 20</Text>}
                {manyTags && <Text style={styles.error}>Cannot have more than 5 tags</Text>}
                {emptyTags && <Text style={styles.error}>Cannot have empty tags</Text>}
            </View>
            <TouchableOpacity
                onPress={createQuestion}
                style={styles.loginButton}
            >
                <Text style={styles.loginButtonText}>Post Question</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 32,
    },
    inputContainer: {
        paddingTop: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    labelDescription: {
        fontSize: 12
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 16,
        marginBottom: 10,
    },
    loginButton: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#007AFF',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'center',
    },
    textArea: {
        height: 120,
        textAlignVertical: 'top',
    },
    error: {
        color: 'red',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 32,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    },
    mandatoryFields: {
        color: 'red',
        fontStyle: 'italic',
    },
});

export default AskQuestions;