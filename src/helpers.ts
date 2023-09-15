import html2canvas from 'html2canvas';

export const handleSaveAsImage = () => {
  const calendarElement = document.querySelector('#calendar') as HTMLElement;
  if (calendarElement) {
    html2canvas(calendarElement, { scale: 2 }).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'calendar.png';
      link.click();
    });
  }
};

// In future scale will be store with redux and user will have options to change it

// Also, will be implemented toasts for errors and success messages, or some alert
