import React, { useEffect, useState } from 'react';

interface TxtRotateProps {
  toRotate: string[];
  period: number;
}

export const TxtRotate: React.FC<TxtRotateProps> = ({ toRotate, period }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300);

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(current => {
        if (isDeleting) {
          return fullText.substring(0, current.length - 1);
        } else {
          return fullText.substring(0, current.length + 1);
        }
      });

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? 150 : 300 - Math.random() * 100);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, toRotate, period, delta]);

  return (
    <span className="txt-rotate">
      <span className="wrap">{text}</span>
    </span>
  );
};
