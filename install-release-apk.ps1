# QuickBank Release APK Installation Script
# Run this script when your Android device is connected via USB

Write-Host "`n═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  QUICKBANK RELEASE APK INSTALLER" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════`n" -ForegroundColor Cyan

# Check if device is connected
Write-Host "🔍 Checking for connected devices..." -ForegroundColor Yellow
$devices = adb devices | Select-String -Pattern "device$"

if (-not $devices) {
    Write-Host "❌ No device detected!" -ForegroundColor Red
    Write-Host "`nPlease:" -ForegroundColor Yellow
    Write-Host "1. Connect your Android device via USB" -ForegroundColor White
    Write-Host "2. Enable USB Debugging (Settings → Developer Options)" -ForegroundColor White
    Write-Host "3. Accept the USB debugging prompt on your device" -ForegroundColor White
    Write-Host "4. Run this script again`n" -ForegroundColor White
    exit 1
}

Write-Host "✅ Device detected!`n" -ForegroundColor Green

# Step 1: Uninstall old app
Write-Host "STEP 1: Uninstalling old app..." -ForegroundColor Cyan
$uninstallResult = adb uninstall com.quickbankmobile 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Old app uninstalled (or was not installed)`n" -ForegroundColor Green
} else {
    Write-Host "⚠️  Uninstall result: $uninstallResult`n" -ForegroundColor Yellow
}

# Step 2: Verify APK exists
$apkPath = "android\app\build\outputs\apk\release\app-release.apk"
if (-not (Test-Path $apkPath)) {
    Write-Host "❌ APK not found at: $apkPath" -ForegroundColor Red
    Write-Host "Please build the release APK first using: .\gradlew assembleRelease`n" -ForegroundColor Yellow
    exit 1
}

$apk = Get-Item $apkPath
Write-Host "✅ APK found: $([math]::Round($apk.Length / 1MB, 2)) MB`n" -ForegroundColor Green

# Step 3: Install release APK
Write-Host "STEP 2: Installing release APK..." -ForegroundColor Cyan
$installResult = adb install -r $apkPath 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ APK installed successfully!`n" -ForegroundColor Green
} else {
    Write-Host "❌ Installation failed!" -ForegroundColor Red
    Write-Host "Error: $installResult`n" -ForegroundColor Red
    exit 1
}

# Step 4: Launch app
Write-Host "STEP 3: Launching app..." -ForegroundColor Cyan
$launchResult = adb shell am start -n com.quickbankmobile/.MainActivity 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ App launched!`n" -ForegroundColor Green
} else {
    Write-Host "⚠️  Launch result: $launchResult`n" -ForegroundColor Yellow
}

Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  INSTALLATION COMPLETE!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════════`n" -ForegroundColor Cyan
Write-Host "Check your device - the app should be running!" -ForegroundColor White
Write-Host "If you see a red error screen, the bundle may need to be regenerated.`n" -ForegroundColor Yellow

