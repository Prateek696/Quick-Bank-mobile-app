# Fixing Common React Native Errors

## Error 1: "AppName has not been registered"

**Cause:** App name mismatch between `app.json`, `MainActivity.java`, and what's registered.

**Solution:**
1. Check `app.json` - should have `"name": "QuickBank"`
2. Check `MainActivity.java` - `getMainComponentName()` should return `"QuickBank"`
3. Check `index.js` - should register with the same name
4. Restart Metro bundler with cache reset: `npm start -- --reset-cache`

## Error 2: "RNGestureHandlerModule could not be found"

**Cause:** `react-native-gesture-handler` must be imported at the very top of your entry file before any other imports.

**Solution:**
Add this as the FIRST line in `index.js`:
```javascript
import 'react-native-gesture-handler';
```

**Why:** React Navigation requires gesture handler to be initialized before React Native core modules.

## Error 3: Native Module Not Found

**Common causes:**
1. Native modules not properly linked
2. Build cache issues
3. Metro bundler cache

**Solutions:**
```bash
# 1. Clean and rebuild
cd android
./gradlew.bat clean
cd ..
npm run android

# 2. Reset Metro cache
npm start -- --reset-cache

# 3. Reinstall node modules (if needed)
rm -rf node_modules
npm install
```

## Error 4: "MainApplication.java is not on the classpath"

**Cause:** IDE (VS Code/Android Studio) not recognizing the Java file.

**Solution:**
1. Open Android Studio
2. File → Open → Select `android` folder
3. Wait for Gradle sync to complete
4. Or reload VS Code window

## Quick Fix Checklist

When app shows errors:

1. ✅ **Import gesture handler first** in `index.js`
2. ✅ **Verify app name** matches in all files
3. ✅ **Restart Metro** with cache reset: `npm start -- --reset-cache`
4. ✅ **Clean Android build**: `cd android && ./gradlew.bat clean && cd ..`
5. ✅ **Rebuild app**: `npm run android`
6. ✅ **Check device/emulator** is connected: `adb devices`

## Files to Check

- `index.js` - Entry point, must import gesture handler first
- `app.json` - App name configuration
- `MainActivity.java` - Native component name
- `android/app/build.gradle` - Native dependencies

