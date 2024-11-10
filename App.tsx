import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/components/SignIn';
import Auth from './src/pages/Auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import SignUp from './src/components/SignUp';


export default function App() {
  return (
    <SafeAreaView className='flex-1 '>
        {/* <SignUp/> */}
        <Auth />
      </SafeAreaView>
  );
}
