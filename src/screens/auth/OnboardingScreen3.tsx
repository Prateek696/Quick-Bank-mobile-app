import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const DESIGN_WIDTH = 375;
const scale = (size: number) => (SCREEN_WIDTH / DESIGN_WIDTH) * size;

interface OnboardingScreen3Props {
  navigation?: any;
}

const OnboardingScreen3: React.FC<OnboardingScreen3Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Enjoy free ATM withdrawals</Text>

        {/* Illustration Image */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/images/onboarding3_illustration.png.jpg')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Get free ATM withdrawals according to your plan
        </Text>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedButton}
          activeOpacity={0.8}
          onPress={() => navigation?.navigate('Latest')}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
    color: '#1E3A8A',
    fontWeight: '600',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 40,
  },
  illustrationContainer: {
    height: scale(310),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(24),
    width: '100%',
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 32,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6B7280',
  },
  activeDot: {
    backgroundColor: '#1E3A8A',
    width: 24,
  },
  getStartedButton: {
    backgroundColor: '#4A69BD',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 'auto',
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default OnboardingScreen3;

