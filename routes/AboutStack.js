import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../components/Home";
import About from "../components/About";

const screens = {
    About:{
        screen : About,
        navigationOptions : {
            title : 'List comments'
        }
    }
}

const AboutStack = createStackNavigator(screens , {
    defaultNavigationOptions:{
        headerTintColor : '#444',
        headerStyle : { backgroundColor : 'pink' , height : 60 }
    }
});

export default AboutStack;
