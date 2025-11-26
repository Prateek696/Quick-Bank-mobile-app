import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';

// Icon Components using images
const PayBillsIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.18.08_85bb81a3.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

const AccountIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.18.57_40ce0346.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

const TransferHistoryIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.19.13_47aef4fd.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

const AddCardIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.20.53_dc9124fd.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

const SettingsIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.21.18_3b50ae26.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

const SupportIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.21.49_e454f238.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

const LegalDocumentsIcon = () => (
  <View style={styles.iconWrapper}>
    <Image
      source={require('../assets/profile icons/WhatsApp Image 2025-11-27 at 01.22.03_2274e765.jpg')}
      style={styles.iconImage}
      resizeMode="cover"
    />
  </View>
);

interface MenuItem {
  iconComponent: React.ReactNode;
  title: string;
  description: string;
  route: string;
}

interface ProfileScreenProps {
  navigation?: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const menuItems: MenuItem[] = [
    {
      iconComponent: <PayBillsIcon />,
      title: 'Pay Bills',
      description: 'Pay for bills like airtime',
      route: 'PayBills',
    },
    {
      iconComponent: <AccountIcon />,
      title: 'Account',
      description: 'Manage your personal information',
      route: 'Account',
    },
    {
      iconComponent: <TransferHistoryIcon />,
      title: 'Transfer History',
      description: 'View you transfer',
      route: 'TransferHistory',
    },
    {
      iconComponent: <AddCardIcon />,
      title: 'Add Card',
      description: 'Add and manage your cards',
      route: 'AddCard',
    },
    {
      iconComponent: <SettingsIcon />,
      title: 'Settings',
      description: 'Device settings and security',
      route: 'Settings',
    },
    {
      iconComponent: <SupportIcon />,
      title: 'Support',
      description: 'Find answers to your queries',
      route: 'Support',
    },
    {
      iconComponent: <LegalDocumentsIcon />,
      title: 'Legal Documents',
      description: 'Legal notices and agreements',
      route: 'LegalDocuments',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View style={styles.userInfo}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.email}>Useremail@gmail.com</Text>
          <Text style={styles.phone}>+91 67483xxxx</Text>
        </View>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              if (item.route === 'Account') {
                navigation?.navigate('AccountManage');
              } else {
                navigation?.navigate(item.route);
              }
            }}>
            <View style={styles.menuIcon}>
              {item.iconComponent}
            </View>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  userInfo: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
  },
  username: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: '#6C7A89',
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: '#6C7A89',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  iconImage: {
    width: 48,
    height: 48,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: '#6C7A89',
  },
  chevron: {
    fontSize: 20,
    color: '#D1D5DB',
  },
});

export default ProfileScreen;

