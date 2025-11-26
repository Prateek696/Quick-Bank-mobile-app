import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../constants/colors';
import PrivacyScreen from '../screens/PrivacyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import BankSelectionScreen from '../screens/BankSelectionScreen';
import SendMoneyCurrencyScreen from '../screens/SendMoneyCurrencyScreen';
import DeliveryMethodScreen from '../screens/DeliveryMethodScreen';
import TransactionConfirmationScreen from '../screens/TransactionConfirmationScreen';
import AccountManageScreen from '../screens/AccountManageScreen';
import ReferralsScreen from '../screens/ReferralsScreen';
import PayBillsScreen from '../screens/PayBillsScreen';
import TransferHistoryScreen from '../screens/TransferHistoryScreen';
import AddCardScreen from '../screens/AddCardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SupportScreen from '../screens/SupportScreen';
import LegalDocumentsScreen from '../screens/LegalDocumentsScreen';
import TermsAndConditionsScreen from '../screens/auth/TermsAndConditionsScreen';
import DatePickerScreen from '../screens/auth/DatePickerScreen';
import CountrySelectionScreen from '../screens/auth/CountrySelectionScreen';
import ReceiveBankSelectionScreen from '../screens/ReceiveBankSelectionScreen';
import ReceiveMoneyCurrencyScreen from '../screens/ReceiveMoneyCurrencyScreen';
import ReceiveDeliveryMethodScreen from '../screens/ReceiveDeliveryMethodScreen';
import CardsScreen from '../screens/CardsScreen';
import SendScreen from '../screens/SendScreen';
import ReceiveScreen from '../screens/ReceiveScreen';
import ManageScreen from '../screens/ManageScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface MainNavigatorProps {
  updateAuthState?: (authenticated: boolean) => void;
}

// Placeholder screen component
const PlaceholderScreen: React.FC<{title: string}> = ({title}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.subtext}>Screen not yet implemented</Text>
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray[500],
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.gray[200],
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/WhatsApp Image 2025-11-27 at 02.21.28_f4187665.jpg')}
              style={[styles.tabIcon, {opacity: focused ? 1 : 0.5}]}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Send"
        component={SendScreen}
        options={{
          tabBarLabel: 'Send',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/WhatsApp Image 2025-11-27 at 02.09.12_d2c1ab82.jpg')}
              style={[styles.tabIcon, {opacity: focused ? 1 : 0.5}]}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Receive"
        component={ReceiveScreen}
        options={{
          tabBarLabel: 'Receive',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/WhatsApp Image 2025-11-27 at 02.14.41_2c00a054.jpg')}
              style={[styles.tabIcon, {opacity: focused ? 1 : 0.5}]}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/WhatsApp Image 2025-11-27 at 02.26.50_cba4e2fa.jpg')}
              style={[styles.tabIcon, {opacity: focused ? 1 : 0.5}]}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator: React.FC<MainNavigatorProps> = ({updateAuthState}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors.gray[50]},
      }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="BankSelection" component={BankSelectionScreen} />
      <Stack.Screen name="SendMoneyCurrency" component={SendMoneyCurrencyScreen} />
      <Stack.Screen name="DeliveryMethod" component={DeliveryMethodScreen} />
      <Stack.Screen name="TransactionConfirmation" component={TransactionConfirmationScreen} />
      <Stack.Screen name="AccountManage" component={AccountManageScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PayBills" component={PayBillsScreen} />
      <Stack.Screen name="TransferHistory" component={TransferHistoryScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
      <Stack.Screen name="LegalDocuments" component={LegalDocumentsScreen} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
      <Stack.Screen name="ReceiveBankSelection" component={ReceiveBankSelectionScreen} />
      <Stack.Screen name="ReceiveMoneyCurrency" component={ReceiveMoneyCurrencyScreen} />
      <Stack.Screen name="ReceiveDeliveryMethod" component={ReceiveDeliveryMethodScreen} />
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="DatePicker" component={DatePickerScreen} />
      <Stack.Screen name="CountrySelection" component={CountrySelectionScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 14,
    color: '#666666',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});

export default MainNavigator;
