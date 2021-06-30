import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import * as firebase from 'firebase';
import { collection, getDocs } from '@firebase/firestore';
import { styles } from "../FeedScreen/FeedScreen.style.jsx";
import NewContactScreen from "../NewContactScreen/NewContactScreen.main.jsx";
import { FeedCell } from "../../components/FeedCell";

export default function FeedScreen(props) {
    const { navigation } = props;
    const [ search, setSearch ] = useState("");
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;

    const uid = user.uid;

    const getContacts = async () => {
        const snapshot = await db.collection('contacts').doc(uid).collection('contactDetails').get();
        const dataArr = [];
        snapshot.forEach((doc) => {
            dataArr.push({
                ...doc.data(),
                id:doc.id,
            });
        });
        console.log(dataArr);
        return dataArr;
        // console.log(snapshot.docs.map(doc => doc.data()));
        // return snapshot.docs.map(doc => doc.data());
    }

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
                data = {getContacts()}
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