import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutStack
    }
});

export default createAppContainer(RootDrawerNavigator);