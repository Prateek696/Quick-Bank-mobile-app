import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

interface LatestScreenProps {
  navigation?: any;
}

const LatestScreen: React.FC<LatestScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* Page 5 Image from assets */}
      <Image
        source={require('../../assets/images/page5.jpg')}
        style={styles.pageImage}
        resizeMode="cover"
      />

      {/* Navigation Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation?.navigate('CountrySelection')}>
        <Text style={styles.nextButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(12, 26, 115, 0.9)',
  },
  pageImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#5063BF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LatestScreen;
