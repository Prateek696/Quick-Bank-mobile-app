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

const BriefcaseIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.briefcase}>
      <View style={styles.briefcaseTop} />
      <View style={styles.briefcaseBody} />
      <View style={styles.briefcaseHandle} />
    </View>
  </View>
);

const GiftIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.giftBox}>
      <View style={styles.giftRibbonV} />
      <View style={styles.giftRibbonH} />
      <View style={styles.giftBow} />
    </View>
  </View>
);

const SupportIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.questionCircle}>
      <Text style={styles.questionMark}>?</Text>
    </View>
  </View>
);

const DocumentIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.document}>
      <View style={styles.documentLine1} />
      <View style={styles.documentLine2} />
      <View style={styles.documentLine3} />
      <View style={styles.documentLine4} />
    </View>
  </View>
);

interface ManageScreenProps {
  navigation?: any;
}

const ManageScreen: React.FC<ManageScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.title}>Manage</Text>

        {/* Feature Cards */}
        <View style={styles.featureCards}>
          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation?.navigate('Cards')}>
            <Text style={styles.featureIcon}>💳</Text>
            <Text style={styles.featureTitle}>Cards</Text>
            <Text style={styles.featureDescription}>
              Manage your cards
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.featureCard}
            onPress={() => navigation?.navigate('TransferHistory')}>
            <Text style={styles.featureIcon}>📊</Text>
            <Text style={styles.featureTitle}>History</Text>
            <Text style={styles.featureDescription}>
              View transaction history
            </Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('Profile')}>
          <View style={styles.menuIcon}>
            <ProfileIcon />
          </View>
          <Text style={styles.menuText}>Profile</Text>
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

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('PayBills')}>
          <View style={styles.menuIcon}>
            <BriefcaseIcon />
          </View>
          <Text style={styles.menuText}>Pay Bills</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('Referrals')}>
          <View style={styles.menuIcon}>
            <GiftIcon />
          </View>
          <Text style={styles.menuText}>Referrals</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('Support')}>
          <View style={styles.menuIcon}>
            <SupportIcon />
          </View>
          <Text style={styles.menuText}>Support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation?.navigate('LegalDocuments')}>
          <View style={styles.menuIcon}>
            <DocumentIcon />
          </View>
          <Text style={styles.menuText}>Legal Documents</Text>
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
  // Briefcase Icon
  briefcase: {
    width: 20,
    height: 16,
    position: 'relative',
  },
  briefcaseTop: {
    width: 20,
    height: 4,
    backgroundColor: '#92400E',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  briefcaseBody: {
    width: 20,
    height: 12,
    backgroundColor: '#D97706',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  briefcaseHandle: {
    position: 'absolute',
    width: 6,
    height: 2,
    backgroundColor: '#92400E',
    top: 4,
    left: 7,
    borderRadius: 1,
  },
  // Gift Icon
  giftBox: {
    width: 18,
    height: 18,
    backgroundColor: '#D97706',
    borderRadius: 2,
    position: 'relative',
  },
  giftRibbonV: {
    position: 'absolute',
    width: 2,
    height: 18,
    backgroundColor: '#DC2626',
    left: 8,
  },
  giftRibbonH: {
    position: 'absolute',
    width: 18,
    height: 2,
    backgroundColor: '#DC2626',
    top: 8,
  },
  giftBow: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: '#DC2626',
    borderRadius: 3,
    top: 6,
    left: 6,
  },
  // Support/Question Icon
  questionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMark: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  // Document Icon
  document: {
    width: 16,
    height: 20,
    backgroundColor: '#60A5FA',
    borderRadius: 1,
    position: 'relative',
  },
  documentLine1: {
    position: 'absolute',
    width: 10,
    height: 1.5,
    backgroundColor: '#1E3A8A',
    top: 5,
    left: 3,
  },
  documentLine2: {
    position: 'absolute',
    width: 10,
    height: 1.5,
    backgroundColor: '#1E3A8A',
    top: 7.5,
    left: 3,
  },
  documentLine3: {
    position: 'absolute',
    width: 10,
    height: 1.5,
    backgroundColor: '#1E3A8A',
    top: 10,
    left: 3,
  },
  documentLine4: {
    position: 'absolute',
    width: 6,
    height: 1.5,
    backgroundColor: '#1E3A8A',
    top: 12.5,
    left: 3,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    fontWeight: '500',
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

export default ManageScreen;

