# Android Build Commands

This guide explains how to build Android APK and AAB files using npm commands.

## 📦 Build Commands

### 1. **Build Release APK** (For Distribution)
```bash
npm run build:android
```
or
```bash
npm run build:android:release
```

**Output:** `android/app/build/outputs/apk/release/app-release.apk`

**Use case:** For distributing your app directly (not through Play Store)

---

### 2. **Build Debug APK** (For Testing)
```bash
npm run build:android:debug
```

**Output:** `android/app/build/outputs/apk/debug/app-debug.apk`

**Use case:** For testing and development. Includes debugging symbols.

---

### 3. **Build Release AAB** (For Google Play Store)
```bash
npm run build:android:bundle
```

**Output:** `android/app/build/outputs/bundle/release/app-release.aab`

**Use case:** For uploading to Google Play Store (required format)

---

### 4. **Clean Build** (Remove Previous Builds)
```bash
npm run build:android:clean
```

**Use case:** Clean previous build artifacts before building fresh

---

### 5. **Clean and Build** (Recommended Before Release)
```bash
npm run build:android:clean-build
```

**Use case:** Ensures a fresh build without cached artifacts

---

## 🚀 Quick Reference

| Command | Output | Use Case |
|---------|--------|----------|
| `npm run build:android` | Release APK | Direct distribution |
| `npm run build:android:debug` | Debug APK | Testing |
| `npm run build:android:bundle` | Release AAB | Play Store upload |
| `npm run build:android:clean` | - | Clean build files |
| `npm run build:android:clean-build` | Release APK | Fresh release build |

---

## 📍 Build Output Locations

After building, find your files here:

### APK Files:
- **Debug:** `android/app/build/outputs/apk/debug/app-debug.apk`
- **Release:** `android/app/build/outputs/apk/release/app-release.apk`

### AAB Files:
- **Release Bundle:** `android/app/build/outputs/bundle/release/app-release.aab`

---

## 🔐 Signing Your App

### For Release Builds:

Before building for release, you need to set up signing:

1. **Generate a keystore** (if you don't have one):
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
   ```

2. **Update `android/app/build.gradle`**:
   ```gradle
   android {
       ...
       signingConfigs {
           release {
               if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                   storeFile file(MYAPP_RELEASE_STORE_FILE)
                   storePassword MYAPP_RELEASE_STORE_PASSWORD
                   keyAlias MYAPP_RELEASE_KEY_ALIAS
                   keyPassword MYAPP_RELEASE_KEY_PASSWORD
               }
           }
       }
       buildTypes {
           release {
               ...
               signingConfig signingConfigs.release
           }
       }
   }
   ```

3. **Create `android/gradle.properties`** (add these lines):
   ```properties
   MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
   MYAPP_RELEASE_KEY_ALIAS=my-key-alias
   MYAPP_RELEASE_STORE_PASSWORD=*****
   MYAPP_RELEASE_KEY_PASSWORD=*****
   ```

**⚠️ Important:** Never commit `gradle.properties` with passwords to version control!

---

## 🛠️ Manual Gradle Commands

If you prefer using Gradle directly:

```bash
# Navigate to android directory
cd android

# Build commands
./gradlew.bat assembleRelease      # Release APK
./gradlew.bat assembleDebug        # Debug APK
./gradlew.bat bundleRelease        # Release AAB
./gradlew.bat clean                # Clean build

# For Unix/Mac use:
./gradlew assembleRelease
```

---

## 📱 Installing the APK

After building, you can install the APK:

```bash
# Using adb
adb install android/app/build/outputs/apk/release/app-release.apk

# Or manually:
# 1. Transfer APK to your Android device
# 2. Enable "Install from Unknown Sources" in Settings
# 3. Open the APK file and install
```

---

## 🐛 Troubleshooting

### Build Fails with "SDK location not found"
```bash
# Set ANDROID_HOME environment variable
# Windows PowerShell:
$env:ANDROID_HOME = "C:\Users\$env:USERNAME\AppData\Local\Android\Sdk"
```

### Build Fails with "Gradle sync failed"
```bash
# Clean and rebuild
npm run build:android:clean
npm run build:android
```

### Out of Memory Error
Add to `android/gradle.properties`:
```properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=512m
```

### Build Takes Too Long
- First build downloads dependencies (5-10 minutes)
- Subsequent builds are faster
- Use `--offline` flag if dependencies are cached

---

## 📝 Notes

- **First build** may take 5-10 minutes (downloads dependencies)
- **Release builds** are optimized and smaller than debug builds
- **AAB format** is required for Google Play Store (since August 2021)
- **APK format** can be used for direct distribution or testing
- Always test your release build before distributing

---

## 🔗 Related Commands

- `npm run android` - Run app on device/emulator
- `npm run start` - Start Metro bundler
- `npm run doctor` - Check development environment
- `npm run validate` - Run type checking and linting

