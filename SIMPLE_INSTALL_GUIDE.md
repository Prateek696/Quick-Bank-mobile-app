# 📱 SIMPLE STEP-BY-STEP: Install Your App

## 🎯 What You Need
- Your Android phone
- USB cable to connect phone to computer
- The APK file (already built ✅)

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### **STEP 1: Connect Your Phone to Computer**
1. Take your USB cable
2. Connect one end to your Android phone
3. Connect other end to your computer
4. On your phone, you might see a popup - choose "File Transfer" or "MTP"

---

### **STEP 2: Enable Developer Mode on Phone**

**On your Android phone:**

1. Open **Settings** app
2. Scroll down and tap **About Phone** (or **About Device**)
3. Find **Build Number** 
4. **Tap "Build Number" 7 times** (you'll see a message like "You are now a developer!")
5. Go back to Settings
6. Now you'll see **Developer Options** (new menu item)
7. Tap **Developer Options**
8. Find **USB Debugging**
9. **Turn ON USB Debugging** (toggle switch)
10. A popup will appear - tap **OK** or **Allow**

---

### **STEP 3: Check if Phone is Connected**

**On your computer, in the terminal, type:**
```
adb devices
```

**What you should see:**
- If you see a device ID (like `ABC123XYZ    device`) → ✅ Good! Go to STEP 4
- If you see `List of devices attached` with nothing below → ❌ Phone not detected
  - Try: Unplug and replug USB cable
  - Try: On phone, accept the "Allow USB debugging?" popup
  - Try: Change USB mode on phone (File Transfer mode)

---

### **STEP 4: Install the App**

**On your computer, in the terminal, run these 3 commands one by one:**

**Command 1 - Remove old app (if installed):**
```
adb uninstall com.quickbankmobile
```

**Command 2 - Install new app:**
```
adb install android\app\build\outputs\apk\release\app-release.apk
```

**Command 3 - Open the app:**
```
adb shell am start -n com.quickbankmobile/.MainActivity
```

---

### **STEP 5: Check Your Phone**

- The app should open automatically on your phone
- If you see your app's screen (Login/Dashboard) → ✅ SUCCESS!
- If you see a red error screen → See Troubleshooting below

---

## 🔧 TROUBLESHOOTING

### ❌ Problem: "adb: command not found"
**Solution:** ADB is not installed. You need Android SDK Platform Tools.

### ❌ Problem: "no devices/emulators found"
**Solution:** 
- Make sure USB Debugging is ON
- Unplug and replug USB cable
- On phone, accept the USB debugging popup
- Try different USB cable or USB port

### ❌ Problem: Red error screen on app
**Solution:**
1. The bundle might be missing. Run this command:
   ```
   npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
   ```
2. Rebuild the APK:
   ```
   cd android
   .\gradlew assembleRelease
   ```
3. Install again (STEP 4)

### ❌ Problem: "Installation failed"
**Solution:**
- Make sure you uninstalled the old app first
- Make sure USB Debugging is enabled
- Try: `adb install -r android\app\build\outputs\apk\release\app-release.apk` (the `-r` forces reinstall)

---

## 🎉 SUCCESS!

If the app opens without errors, you're done! The app is now installed on your phone.

---

## 📝 QUICK REFERENCE

**All commands in order:**
```bash
# 1. Check connection
adb devices

# 2. Uninstall old app
adb uninstall com.quickbankmobile

# 3. Install new app
adb install android\app\build\outputs\apk\release\app-release.apk

# 4. Launch app
adb shell am start -n com.quickbankmobile/.MainActivity
```

---

## 💡 ALTERNATIVE: Manual Installation (No USB/ADB needed)

If you can't use USB/ADB:

1. **Copy APK to phone:**
   - Find this file on your computer:
     `C:\Users\ARYAN\Desktop\nerf\QuickBank\Quick-Bank-mobile-app\android\app\build\outputs\apk\release\app-release.apk`
   - Copy it to your phone (via email, USB file transfer, cloud storage, etc.)

2. **On your phone:**
   - Open File Manager
   - Find the `app-release.apk` file
   - Tap it
   - If asked, enable "Install Unknown Apps"
   - Tap Install
   - Tap Open

Done! ✅

