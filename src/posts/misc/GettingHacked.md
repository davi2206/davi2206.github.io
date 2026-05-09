---
tags: misc
layout: _article.njk
title: "Getting Hacked"
date: "2026-05-10"
summary: "Not everything is as innocent as it seems"
---

Over the years, I have dabbled in some hacking and penetration testing, playing with different tools. I am only trying to learn, and find ways to make my own infrastructure more secure, but sometimes it is also fun to hack something, just to do it. 

## Jail time?
Many people think hacking is illegal, and all hackers belong in jail. However, this is not the case. Hacking is simply the process of gaining access to something, in a way that was not intended. If you do that to your own network, website, services, etc. it is perfectly fine. Doing it one other peoples things is very illegal though. Think of it as breaking into a house. There are no rules stopping you from breaking in to your own house, as long as it is not putting anyone in danger. But obviously you can't break into other peoples houses. At least not without their express consent. It is exactly the same with hacking. <br>
Unfortunately, the term "hacking" has been mostly used to describe bad people doing bad things, stealing money or identities, or breaking systems. This has led to "hacking" being seen as illegal to many people. To soften the tone a bit, you can choose to use terms as "penetration testing" or "security analysis", but in the end all three terms can be used about the same activities. 

### Three flavours
I am a white hat hacker. I only test my own things, or system, where I am in direct contact with the owner, and has their permission to test certain security aspects of their systems. This is where you should be too. You can easily get a job in cybersecurity, or work freelance as a penetration tester for large companies. <br>
You will need a lot of training though, before getting any wok, but you are always on the right side of the law. 

Gray hat hackers are, well, more of a gray zone. They will do white hat hacking, for fun or profit, but they may also take on less legal tasks, for various reasons. If you move into this category, you have to be very careful what you do, to stay safe, and out of jail. 

Black hat hackers are the criminals of the internet. They work for their own gains, either financial or political, and will use any tools necessary to get the job done. They will go after business or governments, to steal money or information, and they don't care that it is illegal. Don't be in the category. If you are, please leave this website. 

## Getting started
If you have absolutely no clue where to start, I would suggest looking into tutorials on setting up a home-lab for secure testing. Then start looking into Capture The Flag (CTF) challenges around the internet. There are plenty of them, and they are often free to join. The idea of a CTF is you get access to a closed system, where a hacking challenge has been prepared. You then try to find the flag in that system, using different hacking tools and techniques. 

I have decided to try and create a small treasure hunt style CTF on this very website! The challenges will be very basic, and the tools and skills needed are barely classified as hacking, but for someone completely new to the area, it might give you a small taste of the hacker life. 

Read the rules before starting the challenge. They may be helpful in finding the entrypoint for the game. 

## Rules
- This is a beginner friendly, client-side CTF. It is created as a game, not a test of your hacking skills
- All flags are intentionally places, and they all have the format "{{ ctf.flags.format }}"
- The site does not have any real vulnerabilities (that we know of). Do not try to find any. If you do find any, report them immediately, so we can fix them
- Do NOT use any automated tools, scanners or brute-force attacks on the site. They are not needed for this game
- Each flag will give a hint to find the next one
- Feel free to ask for help or hints in the {% discord %} server

There is no backend servers behind this website, so don't try and gain access to the underlaying system. All challenges can be solved in your browser, using just the browser dev tools, and maybe a few google searches. You will not need scanning or cracking tools. <br>
The site is hosted on GitHub Pages, so trying to gain access to the backend is an attack on GitHub, which is owned by Microsoft. I am not kidding when I tell you: Don't try to hack the website. Stick to the rules, and follow the game. Nothing more. 

{{ ctf.flags.intro }}<br>
{{ ctf.hints.intro }}

<!-- {{ ctf.flags.intro_hidden }} -->
<!-- {{ ctf.hints.intro_hidden }} -->