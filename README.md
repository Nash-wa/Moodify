Moodify: A WeirdMoodTracker

A quirky and fun mood tracker built with React, allowing users to select their mood, view mood history, track mood streaks, and receive odd, funny advice based on their emotional state. Perfect for users who want to add a little weirdness and fun to their day!

Features
Mood Selection: Choose from a list of moods (Happy, Sad, Stressed, Relaxed, Neutral) with each mood offering unique messages and quirky advice.
Mood History Timeline: Logs and displays recent moods, with humorous advice for each entry.
Mood Streaks: Tracks consecutive mood entries, displaying a streak count and funny message if you're “stuck” on one mood.
Random Mood Mashup: Combines two random moods and generates an eccentric mashup message for added fun.
Dynamic Font Sizes: Mood message font size changes randomly every two seconds to keep things visually engaging.
Animated Icons: Each mood is represented by an icon that spins, bounces, or otherwise animates, adding a whimsical touch.

Installation

To get started with the WeirdMoodTracker app, follow these steps:

1. Clone the repository:

git clone https://github.com/your-username/WeirdMoodTracker.git
cd WeirdMoodTracker


2. Install dependencies:

npm install


3. Run the app:

npm start


4. Open http://localhost:3000 to view the app in your browser.



Usage

1. Select a Mood: Use the dropdown to select your current mood.


2. View Mood History: Your recent moods will appear in a timeline below, complete with the weird advice associated with each mood.


3. Track Streaks: If you choose the same mood consecutively, a streak count will appear!


4. Check Out the Mood Mashup: A random mashup message combining two moods will generate automatically after each selection.


Components
Mood Options: Contains various moods, each with a unique message, advice, and animated icon.
Mood History: Logs the selected mood with a timestamp and displays it in a quirky timeline.
Streak Counter: Counts consecutive moods and displays a fun message.
Random Mood Mashup: Randomly combines two moods for a quirky mix.
Random Font Size Generator: Changes font size randomly to keep things visually interesting.


Dependencies
React: The JavaScript library for building user interfaces.
lucide-react: Provides the fun icons used in the app.
Other Dependencies: @/components/ui/* (assuming these are custom UI components in your project).


Contributing
Contributions are welcome! If you have any suggestions, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.


