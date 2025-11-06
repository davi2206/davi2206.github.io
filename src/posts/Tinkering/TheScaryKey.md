---
tags: tinkering
layout: _article.njk
title: "The Scary Key"
date: "2025-11-13"
summary: "Turns out it is scary easy to 3D print a working key"
---

For quite a while I have been into hacking and penetration testing. The concept of gaining access to areas and systems that are supposed to be off limits. I'm not interested in illegally breaking into places, but the elegance and ingenuity used by hackers and penetration testers intrigue me. 

A while ago I saw someone claiming that you could 3D print a key and have it work. However, I was sceptic that it would be as easy as it seemed on YouTube and doubted that it could even work. Therefore, I set out to test it. 

The idea originally came from [The Modern Rogue](https://www.youtube.com/watch?v=FDcyqHvAt3Y) who tested this out together with Bill Doran from Punished Props. They took a photograph of a key, sketched it out and printed it on a regular 3D printer. Then they used it to open a lock.

For me it seemed like duplicating the kay would be a lot more complicated, without having some sort of template. Getting the pins replicated and precise enough to work for the lock is one thing, but keys also have odd grooves on the sides, to prevent 'rogue' keys to enter the lock. Designing and printing these details on the kay seemed daunting to me. 

After considering the task for a while I realized that maybe the details on the key were not that important. Simply printing a key slim enough to bypass the grooves might work. Of course, the key might not be strong enough to turn the tumbler, but if it could slide in and set all the pins correctly, a flathead screwdriver could be used as a wrench to turn the lock.


I immediately wanted to test this theory, and how long it would take to get it to work. I have a clear padlock laying around, for training lock picking (Just for the hobby). I took a quick photo of the key for that lock and imported the image into CAD. I am using Fusion 360, because it is free and quite powerful.

It didn't take too long to sketch out the key, by simply drawing shapes over the teeth of the key. I extruded the key image just a few millimeters. Just enough to have some structure, but still thin enough that it would easily slide into the lock. 

Using OctoPrint on my RaspberryPi and my Ender 3, I printed my key. As soon as the key was finished I tested it on the padlock. It was very snug, and almost didn't fit in the cylinder, but after a little bit of wiggling the lock popped open. The key held up just fine, and I didn't need a screwdriver to wrench the cylinder. 

You can easily feel that the key is not the original, but for a 3D printed model it works remarkably well. The printing of the key took about five minutes and the entire project from finding the key and lock, to the lock popped open, took just 26 minutes and 20 seconds (Yes, I timed it). 

It is a very ugly key and it looks like it is about to break even just laying on the table. It feels weak and fragile when you hold it, and it feels rough and unpolished when you use it to open the lock. But the point here is: It opens the lock. As a proof of concept this key proves how easy it is to duplicate a key. Obviously it would be significantly harder to copy a high-end key and open a better lock, but remember this took me less than half an hour. Imagine what someone more skilled than me could do with a days work and an image of your house keys. 

Remember this is all just for education! Please don't go out and copy keys that are not your own, as that is still very much illegal. 

Stay safe. Stay honest.