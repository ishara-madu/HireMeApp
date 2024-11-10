import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/pages/SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import SignUp from './src/pages/SignUp';
import Welcome from './src/pages/Welcome';
import ChoosePath from './src/pages/ChoosePath';


export default function App() {
  return (
    <SafeAreaView className='flex-1 '>
      <ThemeProvider>
      <StatusBar style="light" backgroundColor='#22826a' />
      {/* <SignIn /> */}
        <SignUp/>
        {/* <ChoosePath /> */}
        {/* <Welcome/> */}
      </ThemeProvider>
      </SafeAreaView>
  );
}
