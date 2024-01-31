import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { onMessageListener } from './Firebase';
import Alarm from './Alarm';

const Notification = () => {
  const [notification, setNotification] = useState({ title: '', body: '', image: '' });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return <Alarm></Alarm>;
  }

  useEffect(() => {
    if (notification?.title) {
      notify();
    }
  }, [notification]);

  onMessageListener()
    .then((payload: any) => {
      setNotification({ title: payload?.notification?.title, body: payload?.notification?.body });
    })
    .catch((err) => console.log('failed: ', err));

  return <Toaster />;
};

export default Notification;
