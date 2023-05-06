
import AppNavigator from "./navigation/Navigator";
import {Provider, DefaultTheme} from "react-native-paper"

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return(
    <Provider theme={MyTheme}>

    <AppNavigator></AppNavigator>
    </Provider>
  )
}
