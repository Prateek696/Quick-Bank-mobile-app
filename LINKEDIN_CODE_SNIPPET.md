# LinkedIn Code Snippet - QuickBank Mobile App

## Option 1: Currency Conversion Logic (RECOMMENDED)
Shows real-time calculations and TypeScript implementation:

```typescript
// SendMoneyCurrencyScreen.tsx
const [sendAmount, setSendAmount] = useState('0,00');
const [receiveAmount, setReceiveAmount] = useState('0,00');

<TextInput
  style={styles.amountInput}
  value={sendAmount}
  onChangeText={(text) => {
    // Allow only numbers and comma
    const formatted = text.replace(/[^0-9,]/g, '');
    setSendAmount(formatted);
    
    // Real-time currency conversion (1 EUR = 287.46 PKR)
    if (formatted && formatted !== '0,00') {
      const numValue = parseFloat(formatted.replace(',', '.'));
      if (!isNaN(numValue)) {
        const receive = (numValue * 287.46)
          .toFixed(2)
          .replace('.', ',');
        setReceiveAmount(receive);
      }
    } else {
      setReceiveAmount('0,00');
    }
  }}
  keyboardType="numeric"
/>
```

---

## Option 2: Navigation Architecture
Shows complex navigation structure:

```typescript
// MainNavigator.tsx
const MainNavigator: React.FC<MainNavigatorProps> = ({updateAuthState}) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: colors.gray[50]},
    }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="BankSelection" component={BankSelectionScreen} />
      <Stack.Screen name="SendMoneyCurrency" component={SendMoneyCurrencyScreen} />
      <Stack.Screen name="DeliveryMethod" component={DeliveryMethodScreen} />
      <Stack.Screen name="TransactionConfirmation" component={TransactionConfirmationScreen} />
      {/* ... 20+ more screens */}
    </Stack.Navigator>
  );
};
```

---

## Option 3: Complete Component Structure
Shows full TypeScript component with styling:

```typescript
// SendMoneyCurrencyScreen.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';

interface SendMoneyCurrencyScreenProps {
  navigation?: any;
}

const SendMoneyCurrencyScreen: React.FC<SendMoneyCurrencyScreenProps> = ({
  navigation,
}) => {
  const [sendAmount, setSendAmount] = useState('0,00');
  const [receiveAmount, setReceiveAmount] = useState('0,00');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.amountCard}>
        <View style={styles.amountRow}>
          <TextInput
            style={styles.amountInput}
            value={sendAmount}
            onChangeText={(text) => {
              const formatted = text.replace(/[^0-9,]/g, '');
              setSendAmount(formatted);
              // Real-time conversion logic...
            }}
            keyboardType="numeric"
          />
          <View style={styles.currencyBadge}>
            <Text style={styles.flag}>🇵🇹</Text>
            <Text style={styles.currency}>EUR</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  amountCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  // ... more styles
});

export default SendMoneyCurrencyScreen;
```

---

## Option 4: Dashboard Component
Shows clean component structure:

```typescript
// DashboardScreen.tsx
const DashboardScreen: React.FC<DashboardScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User</Text>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>€0.00</Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation?.navigate('BankSelection')}>
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>💸</Text>
            </View>
            <Text style={styles.actionLabel}>Send Money</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
```

---

## 📸 Screenshot Tips:

1. **Use VS Code with a dark theme** (Monokai, Dracula, or One Dark Pro)
2. **Zoom to 125-150%** for better readability
3. **Show 20-30 lines** of code (not too much, not too little)
4. **Include the file name** at the top
5. **Use syntax highlighting** (make sure it's enabled)
6. **Crop tightly** around the code (remove unnecessary UI)

## 🎨 Recommended VS Code Settings for Screenshot:
- Theme: Dark+ (default) or Monokai
- Font: Fira Code or JetBrains Mono (with ligatures)
- Font Size: 14-16px
- Line Height: 1.5
- Show line numbers: ON



