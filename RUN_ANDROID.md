# How to Run the Android App

## Prerequisites

Before running the app, ensure you have the following installed:

1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version`

2. **Java Development Kit (JDK)** (JDK 11 or higher)
   - Download from: https://adoptium.net/ or Oracle JDK
   - Verify: `java -version`
   - Set `JAVA_HOME` environment variable

3. **Android Studio**
   - Download from: https://developer.android.com/studio
   - Install Android SDK (API level 33 or higher recommended)
   - Install Android SDK Build-Tools
   - Install Android Emulator (or use a physical device)

4. **React Native CLI** (optional, but recommended)
   ```bash
   npm install -g react-native-cli
   ```

## Step-by-Step Instructions

### Step 1: Navigate to Project Directory
```bash
cd QuickBank/Quick-Bank-mobile-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Android Environment Variables

**For Windows (PowerShell):**
```powershell
$env:ANDROID_HOME = "C:\Users\$env:USERNAME\AppData\Local\Android\Sdk"
$env:PATH += ";$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\tools;$env:ANDROID_HOME\tools\bin"
```

**For Windows (Command Prompt):**
```cmd
set ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;%ANDROID_HOME%\tools\bin
```

**Note:** Adjust the path if Android SDK is installed in a different location.

### Step 4: Start Metro Bundler
Open a terminal and run:
```bash
npm start
```
Or:
```bash
npx react-native start
```

Keep this terminal running. The Metro bundler serves your JavaScript code.

### Step 5: Run on Android

**Option A: Using npm script (Recommended)**
Open a **new terminal** (keep Metro running) and run:
```bash
npm run android
```

**Option B: Using React Native CLI**
```bash
npx react-native run-android
```

**Option C: Using Android Studio**
1. Open Android Studio
2. Open the `android` folder in Android Studio
3. Wait for Gradle sync to complete
4. Click the "Run" button or press `Shift+F10`

### Step 6: Connect Device or Emulator

**Using Android Emulator:**
1. Open Android Studio
2. Go to Tools → Device Manager
3. Create a new virtual device (if needed)
4. Start the emulator
5. Run `npm run android` (it will automatically detect the emulator)

**Using Physical Device:**
1. Enable Developer Options on your Android device:
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
2. Enable USB Debugging:
   - Go to Settings → Developer Options
   - Enable "USB Debugging"
3. Connect device via USB
4. Run `npm run android`

## Troubleshooting

### Issue: "SDK location not found"
**Solution:** Set `ANDROID_HOME` environment variable (see Step 3)

### Issue: "Command 'adb' not found"
**Solution:** Add Android SDK platform-tools to PATH (see Step 3)

### Issue: "Gradle build failed"
**Solution:** 
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Issue: "Metro bundler cache issues"
**Solution:**
```bash
npm start -- --reset-cache
```

### Issue: "No devices/emulators found"
**Solution:**
1. Check if emulator is running: `adb devices`
2. If no devices listed, start an emulator from Android Studio
3. For physical device, ensure USB debugging is enabled

### Issue: "Build failed with 'react-native-vector-icons' error"
**Solution:** You may need to link native dependencies:
```bash
cd android
./gradlew clean
cd ..
npm install
npm run android
```

### Issue: "Port 8081 already in use"
**Solution:**
```bash
# Find and kill the process using port 8081
# Windows PowerShell:
netstat -ano | findstr :8081
taskkill /PID <PID> /F

# Then restart Metro bundler
npm start
```

## Quick Start (All-in-One)

If everything is set up, you can run:
```bash
cd QuickBank/Quick-Bank-mobile-app
npm install
npm start
# In a new terminal:
npm run android
```

## Additional Notes

- The first build may take 5-10 minutes as Gradle downloads dependencies
- Ensure you have at least 4GB of free disk space
- For better performance, use a physical device or a high-performance emulator
- If you encounter issues, check the React Native documentation: https://reactnative.dev/docs/environment-setup




