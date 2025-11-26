import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

interface PrivacyScreenProps {
  navigation?: any;
}

const PrivacyScreen: React.FC<PrivacyScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>We Care About Your Privacy</Text>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>

        <Text style={styles.paragraph}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
          natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.acceptButton} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Accept All</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rejectButton} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Reject All</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.preferenceLink}>
          <Text style={styles.preferenceText}>Preference</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#1F2937',
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 16,
    gap: 12,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#4A69BD',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#4A69BD',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  preferenceLink: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  preferenceText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
});

export default PrivacyScreen;

