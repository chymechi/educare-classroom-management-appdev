import { View, StyleSheet, Platform } from 'react-native';
import { Slot } from 'expo-router';
import Sidebar from '../sidebar';

const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

export default function DashboardLayout() {
  if (isMobile) {
    return (
      <View style={mobileStyles.container}>
        <View style={mobileStyles.content}>
          <Slot />
        </View>
        <Sidebar />
      </View>
    );
  }

  return (
    <View style={webStyles.container}>
      <Sidebar />
      <View style={webStyles.content}>
        <Slot />
      </View>
    </View>
  );
}

const mobileStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  content: { 
    flex: 1, 
    backgroundColor: '#fff',
    paddingBottom: 90, 
  },
});

const webStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'row' 
  },
  content: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
});