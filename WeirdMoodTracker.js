import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Frown, SmilePlus, Brain, Star } from 'lucide-react';

const WeirdMoodTracker = () => {
  const [currentMood, setCurrentMood] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);
  const [mashupMood, setMashupMood] = useState('');
  const [streakCount, setStreakCount] = useState(0);
  const [randomFontSize, setRandomFontSize] = useState(16);

  const moodOptions = [
    { value: 'happy', label: 'Happy', icon: Frown, color: 'text-blue-500', message: "Oh no, you're happy? That's terrible! Here's a tissue 🤧", weirdAdvice: "Try stubbing your toe to balance out the happiness!" },
    { value: 'sad', label: 'Sad', icon: SmilePlus, color: 'text-yellow-500', message: "You're sad? PARTY TIME! Let's dance! 💃🕺✨", weirdAdvice: "Quick! Watch cat videos in reverse!" },
    { value: 'stressed', label: 'Stressed', icon: Star, color: 'text-purple-500', message: "Stressed? Perfect weather for a picnic! 🧺🌞", weirdAdvice: "Try juggling water balloons indoors!" },
    { value: 'relaxed', label: 'Relaxed', icon: Brain, color: 'text-red-500', message: "Relaxed?! QUICK, PANIC ABOUT EVERYTHING! 😱", weirdAdvice: "Count backwards from infinity, NOW!" },
    { value: 'neutral', label: 'Neutral', icon: Star, color: 'text-green-500', message: "NEUTRAL?! THIS IS THE MOST EXTREME THING EVER!!! 🎢🎪🎭", weirdAdvice: "Try expressing ALL emotions at once!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => setRandomFontSize(Math.floor(Math.random() * 20) + 14), 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMoodSelect = (value) => {
    setCurrentMood(value);
    const newEntry = { timestamp: new Date().toLocaleTimeString(), mood: value, weird_response: moodOptions.find(m => m.value === value)?.message };
    setMoodHistory(prev => [...prev, newEntry]);
    updateStreak(value);
    generateMashupMood();
  };

  const updateStreak = (newMood) => {
    if (moodHistory.length > 0) {
      const lastMood = moodHistory[moodHistory.length - 1].mood;
      if (lastMood === newMood) setStreakCount(prev => prev + 1);
      else setStreakCount(1);
    } else setStreakCount(1);
  };

  const generateMashupMood = () => {
    const mood1 = moodOptions[Math.floor(Math.random() * moodOptions.length)];
    const mood2 = moodOptions[Math.floor(Math.random() * moodOptions.length)];
    const mashupMessage = `${mood1.label}-${mood2.label}: ${generateWeirdMashupAdvice(mood1.label, mood2.label)}`;
    setMashupMood(mashupMessage);
  };

  const generateWeirdMashupAdvice = (mood1, mood2) => {
    const weirdCombos = {
      'Happy-Sad': "Try laughing and crying simultaneously while hopping on one foot! 😂😢",
      'Stressed-Relaxed': "Meditate intensely while running a marathon! 🧘‍♂️🏃‍♂️",
      'Neutral-Happy': "Express joy with the most monotone voice possible! 😐😊",
      default: "Do a cartwheel while solving quantum physics equations! 🤸‍♂️🤯"
    };
    return weirdCombos[`${mood1}-${mood2}`] || weirdCombos.default;
  };

  const MoodIcon = ({ mood }) => {
    const option = moodOptions.find(m => m.value === mood);
    if (!option) return null;
    const Icon = option.icon;
    return <div className="animate-bounce"><Icon className={`w-6 h-6 ${option.color} transform rotate-180`} /></div>;
  };

  return (
    <div className="w-full max-w-4xl space-y-4 p-4">
      <Card className="bg-gradient-to-r from-pink-100 to-purple-100">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Tell me your mood... if you dare! 🙃</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-4 items-center justify-center">
            <Select value={currentMood} onValueChange={handleMoodSelect}>
              <SelectTrigger className="w-48"><SelectValue placeholder="Choose wisely..." /></SelectTrigger>
              <SelectContent>{moodOptions.map(({ value, label, icon: Icon, color }) => (<SelectItem key={value} value={value} className="flex items-center"><div className="flex items-center space-x-2"><Icon className={`w-4 h-4 ${color} animate-spin`} /><span>{label}</span></div></SelectItem>))}</SelectContent>
            </Select>
            {currentMood && <MoodIcon mood={currentMood} />}
          </div>
          {currentMood && <div className="text-lg font-bold text-center py-4 animate-pulse" style={{ fontSize: `${randomFontSize}px` }}>{moodOptions.find(m => m.value === currentMood)?.message}</div>}
          {streakCount > 1 && <div className="text-center text-purple-600 font-bold animate-bounce">🎯 {streakCount}x STREAK OF {currentMood.toUpperCase()}! ARE YOU STUCK? 🎯</div>}
          {mashupMood && <Card className="bg-gradient-to-r from-yellow-100 to-green-100 mt-4"><CardContent className="p-4"><h3 className="font-bold text-center mb-2">🎲 Random Mood Mashup! 🎲</h3><p className="text-center text-sm italic">{mashupMood}</p></CardContent></Card>}
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-r from-blue-100 to-green-100">
        <CardHeader><CardTitle className="text-center">Your Weird Mood Timeline 🎪</CardTitle></CardHeader>
        <CardContent><div className="space-y-2">{moodHistory.slice(-5).reverse().map((entry, i) => (<div key={i} className="flex items-center space-x-2 text-sm p-2 bg-white/50 rounded-lg hover:scale-105 transform transition-transform"><span className="text-gray-500">{entry.timestamp}</span><MoodIcon mood={entry.mood} /><span className="font-medium">{moodOptions.find(m => m.value === entry.mood)?.label}</span><span className="text-xs italic">{moodOptions.find(m => m.value === entry.mood)?.weirdAdvice}</span></div>))}</div></CardContent>
      </Card>
    </div>
  );
};

export default WeirdMoodTracker;
