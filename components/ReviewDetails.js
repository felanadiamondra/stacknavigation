import { View, Button, Text, StyleSheet } from "react-native";

function ReviewDetails({navigation}){
    const pressHandler = () =>{
        navigation.goBack("ReviewDetails");
    }
    return(
        <View style = {styles.container}>
           <Text style = {styles.title}>{navigation.getParam('name')}</Text> 
           <Text>  Email : {navigation.getParam('email')}</Text> 
           <Text>{navigation.getParam('body')}</Text>   
           <Button title="Edit"/> 
           <Button title="Delete"/> 
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        padding : 24
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        margin : 10,
        color : 'purple'
    },
    rating : {
        textAlign : 'center',
        margin : 10,
        fontWeight : 'bold'
    }
})
export default ReviewDetails;