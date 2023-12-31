import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //   const authorizationCode = urlParams.get('code');
  //   console.log(authorizationCode)

  const requestAPI = async (token: string) => {
    const res = await axios.post('http://localhost:3333/auth/login', {
      data: {
        access_token: token,
      },
    });
    console.log(res);
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
      <Link href="/login" />
      <div>login </div>
    </div>
  );
};
export default Login;
