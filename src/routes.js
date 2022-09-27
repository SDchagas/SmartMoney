import { createAppContainer, createSwitchNavigator } from "react-navigation";
import NewEntry from './pages/NewEntry';
import Main from "./pages/Main";

const Routes = createAppContainer(createSwitchNavigator(
    {Main, NewEntry}, 
    {initialRouteName: 'Main',
    backBehavior: 'order'})
)

export default Routes;