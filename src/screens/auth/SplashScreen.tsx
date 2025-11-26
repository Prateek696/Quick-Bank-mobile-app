import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

interface SplashScreenProps {
  navigation?: any;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    // Navigate to Onboarding after 2 seconds
    const timer = setTimeout(() => {
      navigation?.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* Quick Bank Logo/Icon */}
      <View style={styles.logoContainer}>
        <View style={styles.iconContainer}>
          {/* Two stacked rectangles */}
          <View style={styles.cardBack} />
          <View style={styles.cardFront}>
            <View style={styles.dollarCircle}>
              <Text style={styles.dollarSign}>$</Text>
            </View>
            <Text style={styles.quickBankText}>Quick Bank</Text>
          </View>
          {/* Curved arrows */}
          <View style={styles.arrowTop} />
          <View style={styles.arrowBottom} />
        </View>
      </View>

      {/* App Name */}
      <Text style={styles.appName}>Quick Bank</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>Your Best Money Transfer Partner.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  iconContainer: {
    width: 120,
    height: 120,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBack: {
    position: 'absolute',
    width: 80,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    top: 35,
    left: 20,
    opacity: 0.3,
  },
  cardFront: {
    position: 'absolute',
    width: 80,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    top: 30,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  dollarCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  dollarSign: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  quickBankText: {
    fontSize: 8,
    fontWeight: '600',
    color: '#1E3A8A',
  },
  arrowTop: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRadius: 30,
    top: 10,
    right: 10,
    transform: [{rotate: '-45deg'}],
  },
  arrowBottom: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 30,
    bottom: 10,
    left: 10,
    transform: [{rotate: '-45deg'}],
  },
  appName: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FFFFFF',
    opacity: 0.9,
  },
});

export default SplashScreen;

