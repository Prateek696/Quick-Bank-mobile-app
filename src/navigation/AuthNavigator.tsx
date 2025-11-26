import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SplashScreen from '../screens/auth/SplashScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import OnboardingScreen2 from '../screens/auth/OnboardingScreen2';
import OnboardingScreen3 from '../screens/auth/OnboardingScreen3';
import LatestScreen from '../screens/auth/LatestScreen';
import CountrySelectionScreen from '../screens/auth/CountrySelectionScreen';
import CountryResidenceScreen from '../screens/auth/CountryResidenceScreen';
import TermsAndConditionsScreen from '../screens/auth/TermsAndConditionsScreen';
import EmailSignupScreen from '../screens/auth/EmailSignupScreen';
import PersonalInfoScreen from '../screens/auth/PersonalInfoScreen';
import CountryCitizenshipScreen from '../screens/auth/CountryCitizenshipScreen';
import BirthPlaceScreen from '../screens/auth/BirthPlaceScreen';
import DatePickerScreen from '../screens/auth/DatePickerScreen';

const Stack = createStackNavigator();

interface AuthNavigatorProps {
  updateAuthState?: (authenticated: boolean) => void;
}

const AuthNavigator: React.FC<AuthNavigatorProps> = ({updateAuthState}) => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
      <Stack.Screen name="Onboarding3" component={OnboardingScreen3} />
      <Stack.Screen name="Latest" component={LatestScreen} />
      <Stack.Screen name="CountrySelection" component={CountrySelectionScreen} />
      <Stack.Screen name="CountryResidence" component={CountryResidenceScreen} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
      <Stack.Screen name="EmailSignup" component={EmailSignupScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="CountryCitizenship" component={CountryCitizenshipScreen} />
      <Stack.Screen name="BirthPlace" component={BirthPlaceScreen} />
      <Stack.Screen name="DatePicker" component={DatePickerScreen} />
      <Stack.Screen name="Login">
        {({navigation}) => (
          <LoginScreen
            updateAuthState={updateAuthState}
            navigation={navigation}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
