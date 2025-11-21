# Error Detection Commands for React Native/Android Development

Similar to web development tools (ESLint, TypeScript compiler, etc.), React Native and Android development have built-in commands to detect errors before runtime.

## 🔍 Built-in Error Detection Commands

### 1. **React Native Doctor** (Environment Check)
Checks if your development environment is set up correctly:

```bash
npx react-native doctor
```

**What it checks:**
- Node.js version
- JDK installation and version
- Android Studio installation
- Android SDK configuration
- Environment variables (ANDROID_HOME, JAVA_HOME)
- CocoaPods (for iOS)

**Example output:**
```
✔ Node.js
✔ JDK
✖ Android Studio - Required for building Android apps
✔ Android SDK
✔ ANDROID_HOME
```

---

### 2. **TypeScript Type Checking**
Detects type errors in your TypeScript code:

```bash
# Check all TypeScript files
npx tsc --noEmit

# Or with watch mode (continuous checking)
npx tsc --noEmit --watch
```

**What it detects:**
- Type mismatches
- Missing properties
- Incorrect function signatures
- Undefined variables
- Import/export errors

---

### 3. **ESLint** (Code Quality & Errors)
Finds code quality issues and potential bugs:

```bash
# Run ESLint
npm run lint

# Or directly
npx eslint .

# Fix auto-fixable issues
npx eslint . --fix

# Check specific files
npx eslint src/**/*.tsx
```

**What it detects:**
- Syntax errors
- Unused variables
- Missing dependencies in hooks
- Incorrect React patterns
- Code style issues

---

### 4. **Gradle Build Check** (Android Native Errors)
Validates Android native code and configuration:

```bash
# Check Android build without building APK
cd android
./gradlew.bat assembleDebug --dry-run

# Or check for errors only
./gradlew.bat check

# Validate Gradle configuration
./gradlew.bat tasks --all
```

**What it detects:**
- Missing dependencies
- Incorrect Gradle configuration
- Android manifest errors
- Native module linking issues
- Build configuration problems

---

### 5. **Metro Bundler Validation**
Checks JavaScript/TypeScript bundle for errors:

```bash
# Start Metro with validation
npm start

# Or with cache reset (catches more errors)
npm start -- --reset-cache

# Check bundle without running
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output /tmp/test.bundle --assets-dest /tmp
```

**What it detects:**
- Import/export errors
- Missing modules
- Syntax errors in JS/TS
- Circular dependencies

---

### 6. **Android Lint** (Android-Specific Errors)
Android's built-in static analysis tool:

```bash
cd android
./gradlew.bat lint

# Or for specific variants
./gradlew.bat lintDebug
./gradlew.bat lintRelease
```

**What it detects:**
- Android API usage issues
- Performance problems
- Security vulnerabilities
- Accessibility issues
- Best practice violations

---

### 7. **Jest Tests** (Runtime Error Detection)
Run tests to catch runtime errors:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- App.test.tsx
```

---

### 8. **Android Studio Built-in Checks**
When you open the project in Android Studio:
- **Real-time error highlighting** in the editor
- **Gradle sync** shows configuration errors
- **Code inspection** (Analyze → Inspect Code)
- **Build output** shows compilation errors

---

## 📋 Recommended Workflow

### Before Running the App:
```bash
# 1. Check environment
npx react-native doctor

# 2. Type check
npx tsc --noEmit

# 3. Lint code
npm run lint

# 4. Check Android build
cd android && ./gradlew.bat check && cd ..
```

### During Development:
```bash
# Run TypeScript in watch mode (separate terminal)
npx tsc --noEmit --watch

# Run ESLint in watch mode (if configured)
npm run lint -- --watch
```

### Before Committing:
```bash
# Full check
npx react-native doctor
npx tsc --noEmit
npm run lint
npm test
cd android && ./gradlew.bat lint && cd ..
```

---

## 🛠️ Adding More Scripts to package.json

You can add these helpful scripts to your `package.json`:

```json
{
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint .",
    "type-check": "tsc --noEmit",
    "type-check:watch": "tsc --noEmit --watch",
    "check": "npm run type-check && npm run lint",
    "check:android": "cd android && ./gradlew.bat lint && cd ..",
    "doctor": "react-native doctor",
    "validate": "npm run doctor && npm run check && npm run check:android"
  }
}
```

Then you can run:
```bash
npm run type-check      # TypeScript checking
npm run check           # Type + Lint check
npm run validate        # Full validation
```

---

## 🚨 Common Error Detection Scenarios

### 1. **Native Module Not Found** (like RNGestureHandlerModule)
```bash
# Check if native modules are properly linked
cd android
./gradlew.bat :app:dependencies
```

### 2. **Type Errors**
```bash
npx tsc --noEmit
```

### 3. **Import/Export Errors**
```bash
npm start -- --reset-cache
```

### 4. **Android Build Configuration**
```bash
cd android
./gradlew.bat clean
./gradlew.bat assembleDebug
```

### 5. **Missing Dependencies**
```bash
npm run lint
npx react-native doctor
```

---

## 💡 Pro Tips

1. **IDE Integration**: Most IDEs (VS Code, Android Studio) show errors in real-time
2. **Pre-commit Hooks**: Use Husky to run checks before commits
3. **CI/CD**: Add these checks to your CI pipeline
4. **Watch Mode**: Use `--watch` flags for continuous error detection during development

---

## 📚 Additional Tools

- **React DevTools**: For runtime debugging
- **Flipper**: Facebook's debugging platform
- **Android Logcat**: For native Android logs
- **Chrome DevTools**: For JavaScript debugging (via Metro)

---

## 🔗 Quick Reference

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `npx react-native doctor` | Environment check | Setup, troubleshooting |
| `npx tsc --noEmit` | Type checking | Before commits, CI |
| `npm run lint` | Code quality | Continuous, pre-commit |
| `./gradlew.bat lint` | Android lint | Before release |
| `npm test` | Unit tests | Continuous, CI |
| `./gradlew.bat check` | Build validation | Before building APK |


