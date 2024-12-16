import './gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/components/Navigations/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
