import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';

const Restrict = () => {
  const requestAPI = async (token: string) => {
    const res = await axios.post('http://localhost:3333/user/getInfo', {
      data: {
        access_token: token,
      },
    });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const token = urlParams.get('access_token');
    if (token) {
      requestAPI(token);
    }
  }, []);

  return (
    <div>
      <h1>This is a page</h1>
      <Link href="/restrict" />
      <div>restrict </div>
    </div>
  );
};
export default Restrict;
