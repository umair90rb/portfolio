import { useState } from 'react';
import TypingAnimation from '../components/typing-animation';

export default function Home() {
  const skillsTextsToType = [
    'React JS',
    'React Native',
    'Nest JS',
    'Node JS',
    'Javascript.',
  ];
  const lastTextToType = ["Let's build something amazing together."];

  const [firstAnimationCompleted, setFirstAnimationCompleted] = useState(false);

  // Callback function for when the first animation finishes
  const handleFirstAnimationComplete = () => {
    setFirstAnimationCompleted(true);
  };
  return (
    <div className="h-[calc(100vh-80px)] dark:bg-neutral-900 flex justify-center items-center flex-col">
      <p className="text-8xl font-extrabold text-blue-700 text-pretty text-center">
        M Umair
      </p>
      <p className="text-5xl font-extrabold text-black dark:text-white text-pretty text-center">
        Full Stack Developer who likes building stuff with
      </p>
      <TypingAnimation
        texts={skillsTextsToType}
        typingSpeed={100}
        deletingSpeed={50}
        delayBetweenTexts={1500}
        onAnimationComplete={handleFirstAnimationComplete}
        shouldBlinkCursorOnEnd={false}
      />
      {firstAnimationCompleted && (
        <TypingAnimation
          texts={lastTextToType}
          typingSpeed={100}
          deletingSpeed={50}
          delayBetweenTexts={1500}
        />
      )}
      <p className="text-xs text-black dark:text-white text-pretty">
        © 2025 - M Umair
      </p>
      <p className="text-xs text-black dark:text-white text-pretty text-center">
        Built with{' '}
        <span className="text-[var(--secondary-color)]">Tailwindcss</span> •
        Hosted on{' '}
        <span className="text-[var(--secondary-color)]">Github Pages</span> •
        Code on <span className="text-[var(--secondary-color)]">GitHub</span>
      </p>
    </div>
  );
}
