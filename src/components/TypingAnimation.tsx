
import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const titles = [
    'Prompt Engineer',
    'Vibe Coder',
    'AI Hunter',
    'Code Wizard',
    'Tech Innovator',
    'Digital Craftsman'
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed, titles]);

  return (
    <div className="relative mb-8">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-md">
        <span className="heading-gradient">{currentText}</span>
        <span className="text-cyber-cyan animate-pulse">|</span>
      </h3>
    </div>
  );
};

export default TypingAnimation;
