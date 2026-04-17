# Troubleshooting

## Common Issues

### Application Won't Start

**Symptoms**: Nicasa fails to launch or crashes immediately

**Solutions**:
1. Ensure you're running macOS 10.13 or later
2. Check that you have at least 4GB of RAM
3. Restart your Mac
4. Reinstall Nicasa from the Mac App Store
5. Check for conflicting applications

### Screenshots Not Working

**Symptoms**: Screenshot functionality doesn't work

**Solutions**:
1. **Grant Screen Recording Permission**:
   - Go to System Settings > Privacy & Security > Screen Recording
   - Check the box next to Nicasa
   - Restart Nicasa
2. Ensure no other screenshot tools are running
3. Try restarting your Mac

### Chrome Extension Not Working

**Symptoms**: Extension doesn't appear or doesn't extract images

**Solutions**:
1. Ensure the extension is enabled in Chrome
2. Check that you're using a compatible version of Chrome
3. Try refreshing the webpage
4. Reinstall the extension
5. Clear browser cache and cookies

### Images Not Loading

**Symptoms**: Thumbnails don't appear or images fail to open

**Solutions**:
1. Check file permissions on the image files
2. Ensure the images aren't corrupted
3. Verify the format is supported (JPEG, PNG, GIF, BMP, TIFF, WebP)
4. Try opening the folder again
5. Restart Nicasa

### Slow Performance

**Symptoms**: Application is sluggish or thumbnails load slowly

**Solutions**:
1. Close other memory-intensive applications
2. Ensure adequate free RAM (8GB recommended)
3. Reduce thumbnail grid size in preferences
4. Clear application cache
5. Restart your Mac

### AI Editor Not Working

**Symptoms**: AI editing tools are unavailable or not functioning

**Solutions**:
1. Ensure you have a stable internet connection (for some features)
2. Check that your Mac meets the minimum requirements
3. Restart Nicasa
4. Update to the latest version
5. Contact support if the issue persists

### Permission Problems

**Symptoms**: App requests permissions or certain features don't work

**Solutions**:
1. **Screen Recording**: System Settings > Privacy & Security > Screen Recording
2. **Accessibility**: System Settings > Privacy & Security > Accessibility (for overlay mode)
3. **Files and Folders**: System Settings > Privacy & Security > Files and Folders
4. Restart Nicasa after granting permissions

### Overlay Mode Issues

**Symptoms**: Transparent overlay mode doesn't work properly

**Solutions**:
1. Grant Accessibility permission in System Settings
2. Ensure no other overlay tools are running
3. Try toggling overlay mode off and on
4. Restart Nicasa

## Error Messages

### "Screen Recording Permission Required"

**Solution**: Grant screen recording permission as described above in the Screenshots section.

### "Failed to Load Image"

**Possible Causes**:
- File is corrupted
- Unsupported format
- File permissions issue
- File is too large

**Solutions**:
1. Try opening the file with Preview.app to verify it's valid
2. Convert to a supported format
3. Check file permissions
4. Ensure file size is reasonable

### "Extension Not Responding"

**Solution**: Refresh the webpage and try again. If persistent, reinstall the extension.

## Getting Help

If you continue to experience issues:

1. Check this troubleshooting guide
2. Visit our [FAQ](/guide/faq)
3. Submit an issue on [GitHub](https://github.com/nicasa-app/nicasa-support/issues)
4. Include your macOS version, Nicasa version, and detailed steps to reproduce the issue

## System Information

When reporting issues, please include:

- macOS version (Apple menu > About This Mac)
- Nicasa version (Nicasa > About Nicasa)
- Mac model and chip (Apple Silicon or Intel)
- Steps to reproduce the issue
- Any error messages

This usually means the image file has been moved or deleted. Try reopening the folder or selecting a different directory.

### "Unsupported format"

The image format isn't recognized. Check our list of [supported formats](/guide/usage) or convert the image to a compatible format.

### "Out of memory"

Your system doesn't have enough RAM. Close other applications or upgrade your memory.

## Advanced Troubleshooting

### View Logs

To access application logs:

1. Go to Help > Show Logs
2. Or find logs in:
   - Windows: `%APPDATA%\Nicasa\logs`
   - macOS: `~/Library/Application Support/Nicasa/logs`
   - Linux: `~/.config/Nicasa/logs`

### Reset Application

To reset all settings to default:

1. Close Nicasa
2. Delete the application data folder
3. Restart Nicasa

### Command Line Options

For advanced users, Nicasa supports command line arguments:

```bash
nicasa --verbose          # Enable verbose logging
nicasa --reset-settings   # Reset all settings
nicasa /path/to/folder    # Open specific folder
```

## Getting More Help

If these solutions don't resolve your issue:

1. Check our [FAQ](/guide/faq)
2. Search existing [issues](https://github.com/nicasa-project/nicasa-support/issues)
3. Create a new issue with:
   - Your operating system and version
   - Nicasa version
   - Steps to reproduce the problem
   - Any error messages or screenshots