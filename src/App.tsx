import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ToastProvider } from '@util/ToastProvider';
import ModalProvider from '@util/ModalProvider';
import Notification from './firebaseNotifications/Notification';
import { useEffect, useState } from 'react';
import { requestForToken } from './firebaseNotifications/firebase';

const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <ModalProvider>
          <Router />
          <Notification />
        </ModalProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
