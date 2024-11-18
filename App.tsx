import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './src/pages/SignIn';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';
import SignUp from './src/pages/SignUp';
import Welcome from './src/pages/Welcome';
import ChoosePath from './src/pages/ChoosePath';
import Otp from './src/pages/Otp';
import Loading from './src/components/loading/Loading';
import Home from './src/pages/Home';
import SearchArea from './src/components/home/SearchArea';
import { SearchAreaProvider } from './src/context/SearchAreaContext';
import { MapProvider } from './src/context/MapContext';
import Profile from './src/pages/Profile';
import EditProfile from './src/pages/EditProfile';
import Notification from './src/pages/Notification';
import WorkerProfile from './src/pages/WorkerProfile';
import JobsArea from './src/components/home/jobs/JobsArea';


export default function App() {
  return (
    <SafeAreaView className='flex-1 '>
      <ThemeProvider>
        <SearchAreaProvider>
          <MapProvider>
            <StatusBar style="light" backgroundColor='#22826a' />
            {/* <SignIn /> */}
            {/* <SignUp/> */}
            {/* <Otp/> */}
            {/* <ChoosePath /> */}
            {/* <Welcome/> */}
            {/* <Loading/> */}
            {/* <Home /> */}
            {/* <Profile/> */}
            {/* <EditProfile/> */}
            {/* <Notification/> */}
            {/* <WorkerProfile/> */}
            <JobsArea/>
          </MapProvider>
        </SearchAreaProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
