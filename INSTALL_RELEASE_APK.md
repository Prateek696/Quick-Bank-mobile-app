# Step-by-Step Guide: Install Release APK

## ✅ Step 1: Uninstall Old App (CRITICAL)

**On your Android device:**
1. Go to **Settings** → **Apps**
2. Find **QuickBank** (or your app name)
3. Tap **Uninstall**
4. Confirm uninstall

**OR via ADB (if device connected):**
```bash
adb uninstall com.quickbank
```
(Replace `com.quickbank` with your actual package name from `AndroidManifest.xml`)

---

## ✅ Step 2: Transfer APK to Device

**Option A: USB Transfer**
1. Connect your Android device to computer via USB
2. Enable **USB File Transfer** mode on device
3. Copy this file to your device:
   ```
   C:\Users\ARYAN\Desktop\nerf\QuickBank\Quick-Bank-mobile-app\android\app\build\outputs\apk\release\app-release.apk
   ```
4. Paste it anywhere on your device (Downloads folder recommended)

**Option B: ADB Install (Recommended)**
```bash
adb install "C:\Users\ARYAN\Desktop\nerf\QuickBank\Quick-Bank-mobile-app\android\app\build\outputs\apk\release\app-release.apk"
```

**Option C: Email/Cloud**
1. Email the APK to yourself
2. Open email on device
3. Download APK attachment

---

## ✅ Step 3: Enable Unknown Sources (If Needed)

**On your Android device:**
1. Go to **Settings** → **Security** (or **Apps** → **Special Access**)
2. Enable **Install Unknown Apps** (or **Unknown Sources**)
3. Select the app you'll use to install (File Manager, Email, etc.)

---

## ✅ Step 4: Install APK

**On your Android device:**
1. Open **File Manager** (or Downloads)
2. Find `app-release.apk`
3. Tap the APK file
4. Tap **Install**
5. Wait for installation to complete
6. Tap **Open** (or find app in app drawer)

---

## ✅ Step 5: Verify Installation

**Check if app launches:**
- App should open without the red error screen
- If you see the red error, go to **Troubleshooting** below

**Verify it's the release build:**
- App should NOT show developer menu on shake
- No Metro bundler connection needed
- App works offline

---

## 🔧 Troubleshooting

### ❌ Still Getting Red Error Screen?

**Check 1: Verify Bundle Exists**
```bash
# Run this in project root
Test-Path "android\app\src\main\assets\index.android.bundle"
# Should return: True
```

**Check 2: Re-bundle and Rebuild**
```bash
# 1. Generate bundle
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

# 2. Clean build
cd android
.\gradlew clean

# 3. Rebuild
.\gradlew assembleRelease
```

**Check 3: Uninstall and Reinstall**
- Completely uninstall the app
- Restart device
- Install fresh APK

**Check 4: Check Package Name**
- Open `android/app/src/main/AndroidManifest.xml`
- Verify package name matches what's installed
- Uninstall any app with different package name

**Check 5: Verify Entry File**
- Ensure `index.js` exists in project root
- Ensure `index.js` has correct AppRegistry registration

---

## 📱 Alternative: Install via ADB (Easiest)

**If device is connected via USB:**

```bash
# Navigate to project root
cd C:\Users\ARYAN\Desktop\nerf\QuickBank\Quick-Bank-mobile-app

# Uninstall old version
adb uninstall com.quickbank

# Install release APK
adb install android\app\build\outputs\apk\release\app-release.apk

# Launch app
adb shell am start -n com.quickbank/.MainActivity
```

---

## ✅ Success Indicators

- ✅ App opens without red error screen
- ✅ App shows your UI (Login/Dashboard screen)
- ✅ No Metro bundler connection needed
- ✅ App works completely offline
- ✅ No developer menu on device shake

---

## 🚨 If Still Failing

**Send these screenshots:**
1. Screenshot of `android/app/src/main/assets/` folder
2. Screenshot of `android/app/src/main/res/` folder  
3. Screenshot of your `index.js` file
4. Screenshot of the error on device

**Check these files:**
- `index.js` - Entry file exists and is correct
- `app.json` - App name matches
- `AndroidManifest.xml` - Package name is correct

