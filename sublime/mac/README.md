

3176 build 2018.05.14

macOS

1、打开终端输入如下命令

```
printf '\xc3' | dd seek=$((0xae95)) conv=notrunc bs=1 of=/Applications/Sublime\ Text.app/Contents/MacOS/Sublime\ Text
printf '\xc3' | dd seek=$((0xb2c6)) conv=notrunc bs=1 of=/Applications/Sublime\ Text.app/Contents/MacOS/Sublime\ Text
printf '\x48\xc7\xc0\x01\x00\x00\x00\xc3' | dd seek=$((0x85036)) conv=notrunc bs=1 of=/Applications/Sublime\ Text.app/Contents/MacOS/Sublime\ Text
```

2、重启Sublime Text，打开Enter License输入任意字符点击确定，至此完成。
