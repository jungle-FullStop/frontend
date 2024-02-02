import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { onMessageListener } from './Firebase';
import Alarm from './Alarm';
import customSound from '../../assets/sound/chicken.mp3';

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '', image: '' });
  const notify = () => {
    const audio = new Audio(customSound);
    audio.play();
    toast(<ToastDisplay />);
  };

  function ToastDisplay() {
    return <Alarm title={notification.title} body={notification.body} image={notification.image} />;
  }

  useEffect(() => {
    if (notification.title) {
      notify();
    }
  }, [notification]);

  onMessageListener()
    .then((payload: any) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
        image: payload?.notification?.image,
      });
    })
    .catch((err) => console.log('failed: ', err));

  return <Toaster />;
};

export default Notification;
