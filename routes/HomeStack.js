import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../components/Home";
import ReviewDetails from "../components/ReviewDetails";

const screens = {
    Home :{
        screen : Home,
        navigationOptions :{
            title : 'List comments',
            headerStyle : { backgroundColor : 'pink' }
        }
    },
    ReviewDetails :{
        screen : ReviewDetails,
        navigationOptions  : {
            title : 'Details',
            headerStyle : { backgroundColor : 'silver' }
        }
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);