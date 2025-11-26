import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

// Professional Icon Components
const ProfileIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.profileHead} />
    <View style={styles.profileBody} />
  </View>
);

const SettingsIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.gearOuter}>
      <View style={styles.gearInner} />
      <View style={styles.gearTooth1} />
      <View style={styles.gearTooth2} />
      <View style={styles.gearTooth3} />
      <View style={styles.gearTooth4} />
    </View>
  </View>
);

const CardIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.card}>
      <View style={styles.cardStripe} />
      <View style={styles.cardLine1} />
      <View style={styles.cardLine2} />
      <View style={styles.cardLine3} />
    </View>
  </View>
);

const TrophyIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.trophy}>
      <View style={styles.trophyTop} />
      <View style={styles.trophyBody} />
      <View style={styles.trophyBase} />
    </View>
  </View>
);

interface AccountManageScreenProps {
  navigation?: any;
}

const AccountManageScreen: React.FC<AccountManageScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.title}>Manage</Text>

        {/* Feature Cards */}
        <View style={styles.featureCards}>
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation?.navigate('Referrals')}>
            <Text style={styles.featureIcon}>🎁</Text>
            <Text style={styles.featureTitle}>Refer Friends</Text>
            <Text style={styles.featureDescription}>
              Invite friends to earn rewards
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation?.navigate('Support')}>
            <Text style={styles.featureIcon}>❓</Text>
            <Text style={styles.featureTitle}>Help Center</Text>
            <Text style={styles.featureDescription}>
              Find answers and contact us
            </Text>
          </TouchableOpacity>
        </View>

        {/* Account Details Section */}
        <Text style={styles.sectionTitle}>Account Details</Text>

        {/* Sending To */}
        <TouchableOpacity style={styles.sendingToButton}>
          <Text style={styles.flag}>🇵🇰</Text>
          <Text style={styles.sendingToText}>Sending To Pakistan</Text>
          <Text style={styles.chevron}>⌄</Text>
        </TouchableOpacity>

        {/* Menu Items */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('EditProfile')}>
          <View style={styles.menuIcon}>
            <ProfileIcon />
          </View>
          <Text style={styles.menuText}>Edit Profile</Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>VERIFIED</Text>
            <Text style={styles.verifiedCheck}>✓</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('Settings')}>
          <View style={styles.menuIcon}>
            <SettingsIcon />
          </View>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('AddCard')}>
          <View style={styles.menuIcon}>
            <CardIcon />
          </View>
          <Text style={styles.menuText}>Payment Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIcon}>
            <TrophyIcon />
          </View>
          <Text style={styles.menuText}>Redeem Offers</Text>
        </TouchableOpacity>

        {/* Remitly Section */}
        <Text style={styles.sectionTitle}>Remitly</Text>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('Privacy')}>
          <Text style={styles.menuTextGray}>Privacy Choices</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1E3A8A',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  featureCards: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 32,
    gap: 12,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#1E3A8A',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E3A8A',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sendingToButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  flag: {
    fontSize: 24,
    marginRight: 12,
  },
  sendingToText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  chevron: {
    fontSize: 20,
    color: '#6B7280',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 1,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Profile Icon
  profileHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#60A5FA',
    marginBottom: 2,
  },
  profileBody: {
    width: 16,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#60A5FA',
  },
  // Settings/Gear Icon
  gearOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#60A5FA',
    position: 'relative',
  },
  gearInner: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1E3A8A',
    top: 6,
    left: 6,
  },
  gearTooth1: {
    position: 'absolute',
    width: 3,
    height: 6,
    backgroundColor: '#60A5FA',
    top: 0,
    left: 8.5,
  },
  gearTooth2: {
    position: 'absolute',
    width: 3,
    height: 6,
    backgroundColor: '#60A5FA',
    bottom: 0,
    left: 8.5,
  },
  gearTooth3: {
    position: 'absolute',
    width: 6,
    height: 3,
    backgroundColor: '#60A5FA',
    left: 0,
    top: 8.5,
  },
  gearTooth4: {
    position: 'absolute',
    width: 6,
    height: 3,
    backgroundColor: '#60A5FA',
    right: 0,
    top: 8.5,
  },
  // Card Icon
  card: {
    width: 20,
    height: 14,
    borderRadius: 2,
    backgroundColor: '#FBBF24',
    position: 'relative',
  },
  cardStripe: {
    position: 'absolute',
    width: 20,
    height: 3,
    backgroundColor: '#1F2937',
    top: 2,
  },
  cardLine1: {
    position: 'absolute',
    width: 12,
    height: 1,
    backgroundColor: '#9CA3AF',
    top: 7,
    left: 4,
  },
  cardLine2: {
    position: 'absolute',
    width: 8,
    height: 1,
    backgroundColor: '#9CA3AF',
    top: 9,
    left: 4,
  },
  cardLine3: {
    position: 'absolute',
    width: 6,
    height: 1,
    backgroundColor: '#9CA3AF',
    top: 11,
    left: 4,
  },
  // Trophy Icon
  trophy: {
    width: 18,
    height: 20,
    alignItems: 'center',
    position: 'relative',
  },
  trophyTop: {
    width: 12,
    height: 8,
    backgroundColor: '#FBBF24',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  trophyBody: {
    width: 10,
    height: 8,
    backgroundColor: '#FBBF24',
    marginTop: -2,
  },
  trophyBase: {
    width: 18,
    height: 4,
    backgroundColor: '#FBBF24',
    borderRadius: 2,
    marginTop: 2,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
  },
  menuTextGray: {
    flex: 1,
    fontSize: 16,
    color: '#6B7280',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  verifiedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
  },
  verifiedCheck: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default AccountManageScreen;

