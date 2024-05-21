import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { io, Socket } from 'socket.io-client';

export default function Home() {
  // // 1. AccessToken 바로 요청
  // const handleLogin = async () => {
  //   // Google's OAuth 2.0 endpoint for requesting an access token
  //   var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  //   // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  //   var form = document.createElement('form');
  //   form.setAttribute('method', 'GET'); // Send as a GET request.
  //   form.setAttribute('action', oauth2Endpoint);

  //   // Parameters to pass to OAuth 2.0 endpoint.
  //   var params: { [key: string]: string } = {
  //     client_id: process.env.NEXT_PUBLIC_OAUTH2_CLIENT_ID || '',
  //     redirect_uri: 'http://localhost:3000/login',
  //     response_type: 'token',
  //     scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  //     include_granted_scopes: 'true',
  //     state: 'pass-through value',
  //   };

  //   // Add form parameters as hidden input values.
  //   for (var p in params) {
  //     var input = document.createElement('input');
  //     input.setAttribute('type', 'hidden');
  //     input.setAttribute('name', p);
  //     input.setAttribute('value', params[p]);
  //     form.appendChild(input);
  //   }

  //   // Add form to page and submit it to open the OAuth 2.0 endpoint.
  //   document.body.appendChild(form);
  //   form.submit();
  // };

  // const getOpenGraphData = async () => {
  //   try {
  //     const url = 'https://www.youtube.com/watch?v=POe9SOEKotk';
  //     const response = await fetch(
  //       `/api/getMetadata?url=${encodeURIComponent(url)}`
  //     );
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch metadata');
  //     }
  //     const data = await response.json();
  //     // setMetadata(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const authTest = async () => {
  //   // const res = await axios.get('http://localhost:3333/blockchain/contract');
  //   // const res = await axios.get('https://pfplay-api.app/api/v1/play-list', {
  //   const res = await axios.get('http://localhost:8080/api/v1/play-list', {
  //     headers: {
  //       Authorization: `Bearer test`,
  //     },
  //   });
  // };

  // const handleTest = async () => {
  //   try {
  //     // await authTest();
  //     getOpenGraphData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const [messages, setMessages] = useState<any>([]);
  // const [socket, setSocket] = useState<Socket>();

  // const connectHandle = async () => {
  //   try {
  //     // socket.io
  //     if (socket) {
  //       await socket.emit('events', "It's a message from frontend");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // const initSocket = async () => {
  //   try {
  //     const _socket = await io('http://192.168.10.42:7000/', {
  //       withCredentials: true,
  //       // transports: ['websocket', 'polling'],
  //     });
  //     if (_socket.connected) {
  //       await setSocket(_socket);
  //     } else {
  //       // not to try to reconnect automatically
  //       _socket.close();
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('events', (message) => {
  //       return setMessages([...messages, message]);
  //     });

  //     socket.on('connect', () => {
  //       console.log('socket connected');
  //     });
  //   }
  // }, [socket]);

  // useEffect(() => {
  //   initSocket();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-10 mb-10 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold">
          Google OAuth2 Login{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">comment</p>
      </div>
      <div className="mb-10 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold">
          Connect Web Socket{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">comment</p>
      </div>
      <div className="mb-10 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <h2 className="mb-3 text-2xl font-semibold">
          Test{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">comment</p>
      </div>
    </main>
  );
}
