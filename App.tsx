import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/components/SignIn';
import SignUp from './src/components/SignUp';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';


export default function App() {
  return (
    <SafeAreaView className='flex-1 '>
        {/* <SignIn/> */}
        <SignUp />
      </SafeAreaView>
  );
}
