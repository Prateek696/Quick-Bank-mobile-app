import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface ReceiveScreenProps {
  navigation?: any;
}

const ReceiveScreen: React.FC<ReceiveScreenProps> = ({navigation}) => {
  // Navigate directly to receive bank selection when screen loads
  React.useEffect(() => {
    navigation?.navigate('ReceiveBankSelection');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Redirecting to Receive Money...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#6B7280',
  },
});

export default ReceiveScreen;

