# Wowdle 

## Overview

Wowdle is a fun and challenging word puzzle game inspired by the popular game Wordle. But there's a twist! Instead of guessing words, you're guessing which NPC (Non-Player Character) from a popular MMORPG is being represented by the daily picture. The game is built using React, and it uses Google Cloud Firestore as its database.

## Features 

- **Daily Challenges:** A new NPC picture is presented every day.
- **Hints:** After each failed attempt, additional information about the NPC is revealed.
- **Local Stats:** The game stores your win ratios and average number of guesses locally using cookies.
- **Firebase Backend:** Utilizes Google Cloud Firestore for a scalable backend.

## Tech Stack 

- React.js
- Google Cloud Firestore
- Cookies for local storage

## Challenges & Learnings 

Building Wowdle was my first major foray into React and web design. The most challenging aspect was creating a scalable app that didn't require frequent updates. I tackled this problem by incorporating Google Cloud Firestore, allowing for simple data management and eliminating the need for continuous updates.

## Demo 

Check out the live demo [here](https://wowdle.web.app).

## Contributing 

Feel free to open issues and pull requests. Any kind of help is appreciated!
