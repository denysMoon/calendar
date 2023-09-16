import html2canvas from 'html2canvas';
import { useState } from 'react';

export const useSaveImage = () => {
  // I really don't know how to call this state. It isn't loading fo sure.
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveAsImage = () => {
    setIsLoading(true);

    const calendarElement = document.querySelector('#calendar') as HTMLElement;
    if (calendarElement) {
      html2canvas(calendarElement, { scale: 2 })
        .then((canvas) => {
          const image = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = image;
          link.download = 'calendar.png';
          link.click();
        })
        .finally(() => {
          setIsLoading(false);
        });

      // will rewrite it to try catch later

      // also, will add some alert in case of error
    }
  };

  return { isLoading, handleSaveAsImage };
};
