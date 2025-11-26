import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

const scale = (size: number) => (SCREEN_WIDTH / DESIGN_WIDTH) * size;

interface OnboardingScreenProps {
  navigation?: any;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({navigation}) => {
  const frameWidth = scale(361.27);
  const frameHeight = scale(310.11);
  const frameLeft = scale(7);
  const frameTop = scale(196);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      {/* Back Arrow */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation?.goBack()}>
        <View style={styles.backArrow} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Welcome to the bank you'll love</Text>

      {/* Illustration Image */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/onboarding_illustration.png')}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Open your free bank account in minutes
      </Text>

      {/* Pagination Dots */}
      <View style={styles.pageControl}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        activeOpacity={0.8}
        onPress={() => navigation?.navigate('Onboarding2')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    left: scale(16),
    top: scale(59),
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    width: scale(12),
    height: scale(12),
    borderLeftWidth: scale(1.5),
    borderTopWidth: scale(1.5),
    borderColor: '#000000',
    transform: [{rotate: '-45deg'}],
  },
  title: {
    position: 'absolute',
    width: scale(237),
    left: scale(69),
    top: scale(90),
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1E3A8A',
  },
  illustrationContainer: {
    position: 'absolute',
    left: scale(7),
    top: scale(196),
    width: scale(361.27),
    height: scale(310.11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    position: 'absolute',
    width: scale(237),
    left: scale(70),
    top: scale(541),
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: scale(20),
    lineHeight: scale(26),
    textAlign: 'center',
    color: '#243181',
  },
  pageControl: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.368,
    right: SCREEN_WIDTH * 0.3689,
    top: SCREEN_HEIGHT * 0.8067,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(6),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#34384A',
  },
  activeDot: {
    width: scale(28),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: '#5063BF',
  },
  getStartedButton: {
    position: 'absolute',
    width: scale(359),
    height: scale(37),
    left: scale(8),
    top: scale(718),
    backgroundColor: '#5063BF',
    borderRadius: scale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: scale(17.7692),
    lineHeight: scale(27),
    color: '#FFFFFF',
  },
});

export default OnboardingScreen;
