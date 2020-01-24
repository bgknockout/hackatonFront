import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BuscarProyectoScreen from './screens/Users/BuscarProyectoScreen';
import Modal from './screens/Users/Modal'

const AppNavigator = createStackNavigator({
  BuscarProyecto:{
    screen: BuscarProyectoScreen,
  }
}, {
  initialRouteName: 'BuscarProyecto'
})

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal,
},{
  mode: 'modal',
  headerMode: 'none',
})

export default createAppContainer(RootStack)