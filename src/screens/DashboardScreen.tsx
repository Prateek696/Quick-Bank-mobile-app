import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

interface DashboardScreenProps {
  navigation?: any;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🌐</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.notificationIcon}>🔔</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>€0.00</Text>
        </View>

        {/* Exchange Rate Banner */}
        <View style={styles.exchangeRateBanner}>
          <View style={styles.exchangeRateContent}>
            <Text style={styles.exchangeRateLabel}>EXCHANGE RATE</Text>
            <Text style={styles.exchangeRateValue}>1 EUR = 287.46 PKR</Text>
          </View>
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editIconText}>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* Promotional Banners */}
        <View style={styles.bannersSection}>
          <Text style={styles.bannersTitle}>Do more with QuickBank</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.bannersScroll}
            contentContainerStyle={styles.bannersContent}>
            {/* Referral Banner */}
            <TouchableOpacity 
              style={styles.bannerCard}
              onPress={() => navigation?.navigate('Referrals')}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerIcon}>🎁</Text>
                <Text style={styles.bannerTitle}>Refer Friends</Text>
                <Text style={styles.bannerDescription}>
                  Invite friends and earn rewards
                </Text>
              </View>
            </TouchableOpacity>

            {/* Zero Fees Banner */}
            <TouchableOpacity style={styles.bannerCard}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerIcon}>💰</Text>
                <Text style={styles.bannerTitle}>$0 fees</Text>
                <Text style={styles.bannerDescription}>
                  Transfers are fee-free when you send €1000 or more
                </Text>
              </View>
            </TouchableOpacity>

            {/* Secure Transfer Banner */}
            <TouchableOpacity style={styles.bannerCard}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerIcon}>🔒</Text>
                <Text style={styles.bannerTitle}>Send worry-free</Text>
                <Text style={styles.bannerDescription}>
                  Need to change details? You can edit active transfers here
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* New Customer Offer */}
        <TouchableOpacity 
          style={styles.offerCard}
          onPress={() => navigation?.navigate('Referrals')}>
          <Text style={styles.offerIcon}>🎁</Text>
          <View style={styles.offerContent}>
            <Text style={styles.offerTitle}>New customer offer</Text>
            <Text style={styles.offerDescription}>
              Get started now with a special offer on your first transfer
            </Text>
          </View>
        </TouchableOpacity>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionList}>
            <Text style={styles.emptyText}>No transactions yet</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  iconText: {
    fontSize: 20,
  },
  notificationIcon: {
    fontSize: 24,
  },
  balanceCard: {
    backgroundColor: '#1E3A8A',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  exchangeRateBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exchangeRateContent: {
    flex: 1,
  },
  exchangeRateLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  exchangeRateValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  editIcon: {
    padding: 8,
  },
  editIconText: {
    fontSize: 18,
  },
  bannersSection: {
    marginBottom: 24,
  },
  bannersTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  bannersScroll: {
    paddingLeft: 24,
  },
  bannersContent: {
    paddingRight: 24,
    gap: 12,
  },
  bannerCard: {
    width: 280,
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 20,
    marginRight: 12,
  },
  bannerContent: {
    alignItems: 'flex-start',
  },
  bannerIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  bannerDescription: {
    fontSize: 14,
    color: '#1E3A8A',
    lineHeight: 20,
  },
  offerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  offerIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  offerContent: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  offerDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  transactionList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});

export default DashboardScreen;

