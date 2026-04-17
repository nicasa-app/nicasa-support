# Screen Recording Permission Guide (macOS)

## Why Does Nicasa Need Screen Recording Permission?

On macOS, screenshot and screen capture applications must be granted Screen Recording permission in order to read pixels from the display.

Starting from macOS 10.15 Catalina, Apple introduced stricter privacy protections. Any application that captures screen content — including screenshots — must be explicitly approved by the user.

This applies to all apps, including those downloaded from the Mac App Store.

**Without this permission, Nicasa cannot capture screenshots or record screen content.**

## How to Enable Screen Recording Permission

Follow these steps:

1. Open **System Settings**
2. Go to **Privacy & Security**
3. Select **Screen Recording**
4. Find **Nicasa** in the list and check the box

If the app was already running, restart Nicasa after enabling the permission.

## If the Permission Prompt Did Not Appear

The permission dialog usually appears the first time the app attempts to capture the screen.

If you did not see the prompt, it may be because:

- The permission request was previously denied
- The permission state is cached by macOS
- The app attempted capture before the dialog could appear

In this case, you may need to reset the permission.

## Reset Screen Recording Permission

You can reset the permission using the following command in Terminal:

```bash
tccutil reset ScreenCapture com.nicasa.nue
```

After running the command:

1. Restart Nicasa
2. Trigger the screenshot feature again
3. macOS should display the permission dialog again

## If Reset Still Does Not Work

In rare cases, macOS may keep an invalid permission state.

If resetting the permission does not resolve the issue, try the following steps:

1. Quit Nicasa
2. Delete Nicasa from your Applications folder
3. Reinstall the latest version from the Mac App Store
4. Launch the app again
5. When macOS asks for Screen Recording permission, select **Allow**

Reinstalling the app can force macOS to recreate the permission entry.

## Alternative Manual Fix

You can also manually toggle the permission:

1. Open **System Settings**
2. Go to **Privacy & Security**
3. Open **Screen Recording**
4. Uncheck Nicasa, then check it again
5. Restart Nicasa

## Security Note

Granting Screen Recording permission does not allow Nicasa to control your system.

It only allows the application to capture screen pixels for screenshot and capture features.

You can revoke this permission at any time in:
**System Settings → Privacy & Security → Screen Recording**