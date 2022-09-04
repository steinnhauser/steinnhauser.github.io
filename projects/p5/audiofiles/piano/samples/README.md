Used the following command to compress and audio adjust the files:

```
$ ffmpeg -i Piano.mf.C3.aiff -af loudnorm,silenceremove=start_periods=1:start_silence=0.05:start_threshold=-40dB,afade=out:st=3:d=1.5,afade=in:st=0:d=0.05 -to 4.5 C3.mp3  
```
