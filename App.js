import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  return (
    <>
      <StatusBar style='light' />
      <CategoriesScreen />;
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

