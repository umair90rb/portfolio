import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed: number;
  deletingSpeed: number;
  delayBetweenTexts: number;
  onAnimationComplete?: () => void;
  shouldBlinkCursorOnEnd?: boolean;
}

export default function TypingAnimation({
  texts,
  typingSpeed,
  deletingSpeed,
  delayBetweenTexts,
  onAnimationComplete,
  shouldBlinkCursorOnEnd = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false); // New state to control animation end

  useEffect(() => {
    let timer: undefined | number;
    const currentText = texts[textIndex];
    const isLastText = textIndex === texts.length - 1;

    if (animationFinished) {
      if (onAnimationComplete && displayedText.length === currentText.length) {
        onAnimationComplete();
      }
      return;
    }

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
        if (displayedText.length === currentText.length) {
          if (isLastText) {
            setAnimationFinished(true);
            if (onAnimationComplete) {
              onAnimationComplete();
            }
            return;
          }
          setIsDeleting(true);
          timer = setTimeout(handleTyping, delayBetweenTexts);
        } else {
          timer = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        setDisplayedText((prev) => currentText.substring(0, prev.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          timer = setTimeout(handleTyping, typingSpeed); // Start typing next immediately
        } else {
          timer = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };

    if (!animationFinished) {
      timer = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    animationFinished,
    onAnimationComplete,
    shouldBlinkCursorOnEnd,
  ]);

  return (
    <div className="relative h-16 flex items-center justify-center">
      <p
        className={`text-2xl md:text-3xl font-mono text-green-400  text-pretty text-center overflow-hidden pr-1 border-r-4 ${
          animationFinished && shouldBlinkCursorOnEnd === false
            ? 'border-transparent'
            : 'border-green-500 animate-blink-caret'
        }`}
      >
        {displayedText}
      </p>
    </div>
  );
}
