import { type FC, useEffect, useState } from 'react';
import { worker } from './worker/worker';

export const App: FC = () => {
  const [status, setStatus] = useState<string>('loading');
  useEffect(() => {
    worker.db.getState().then(data => setStatus(data.state));
  }, []);

  return <div>Welcome to pkey.app. Status of database: {status}</div>
}
