import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/widget/Widget_Overlay.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      kofiWidgetOverlay.draw('mohamedghulam', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#323842',
        'floating-chat.donateButton.text-color': '#fff'
      });
    };

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return <div>Your component content here</div>;
};

export default MyComponent;
