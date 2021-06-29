import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { firebase } from "../../firebase/config.js";
import { styles } from "../FeedScreen/FeedScreen.style.jsx";
import NewContactScreen from "../NewContactScreen/NewContactScreen.main.jsx";
import { FeedCell } from "../../components/FeedCell";

export default function FeedScreen(props) {
    const { navigation } = props;
    const [ search, setSearch ] = useState("");
    // const db = firebase.firestore();
    // const user = firebase.auth().currentUser;

    // const uid = user.uid;

    // const getData = ({ uid }) => {

    // };

    const renderItem = ({ item }) => {

        let meetsSearchCriteria = search.length == 0 ? true : item.title.toLowerCase().includes(search.toLowerCase());

        if (meetsSearchCriteria) {
            console.log(item);
            return (
                <View>
                    <FeedCell feedItem={item}> </FeedCell>
                    {/* <Text>  Hello </Text> */}
                </View>
            )
        } else {
            return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Hello, Kanyes!
            </Text>
            <TouchableOpacity
                onPress = {()=> navigation.navigate(NewContactScreen)}
            >
                <Text>Add</Text>
            </TouchableOpacity>
            <SearchBar
                placeholder="Search"
                onChangeText={setSearch}
                value={search}
                platform="ios"
            />
            <FlatList
                data = {tempData}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </SafeAreaView>
    )
}

const tempData = [
    {
        id: "1",
        name: "test",
        description:"hello"
    }
]