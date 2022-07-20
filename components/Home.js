import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

function Home({navigation}){

    const pressHandler = () =>{
        navigation.navigate("ReviewDetails");
    }
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const getComments = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments/')
        .then((response) => response.json())
        .then((json) => setUsers(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    useEffect(()=>{
        setLoading(true);
        getComments();
        // console.log(users.name);
    }, [])
    return(
        <View style={styles.container}>
            {
                isLoading ? <Text> Loading ... </Text> : 
                <FlatList 
                data = {users} 
                keyExtractor = {({ id }) => id.toString()}
                renderItem = {({item}) =>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={styles.item}>{item.body}</Text>
                    </TouchableOpacity>
                    // <Text style={styles.item}>{item.body}</Text>
                )}
                />
                // isLoading ? <Text> Loading ... </Text> :
                // <Text style={styles.item}>{users.name}</Text>
            }
          
            {/* <Button title='Go to review' onPress={pressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 24
    }, 
    item : {
        padding : 28,
        borderWidth : 1,
        borderColor : 'pink',
        margin : 10,
        color : '#000'
    }
})

export default Home;