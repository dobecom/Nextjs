import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const Home = () => {
  // 1. AccessToken 바로 요청
  const handleLogin = async () => {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET'); // Send as a GET request.
    form.setAttribute('action', oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params: { [key: string]: string } = {
      client_id: process.env.NEXT_PUBLIC_OAUTH2_CLIENT_ID || '',
      redirect_uri: 'http://localhost:4000/login',
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  };

  const handleTest = async () => {
    try {
      const res = await axios.get('http://localhost:3333/blockchain/contract');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const [messages, setMessages] = useState<any>([]);
  const [socket, setSocket] = useState<Socket>();

  const connectHandle = async () => {
    try {
      // socket.io
      if (socket) {
        await socket.emit('events', "It's a message from frontend");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const initSocket = async () => {
    const _socket = await io('http://192.168.10.42:7000/', {
      withCredentials: true,
      // transports: ['websocket', 'polling'],
    });
    await setSocket(_socket);
  };

  useEffect(() => {
    if (socket) {
      socket.on('events', (message) => {
        return setMessages([...messages, message]);
      });

      socket.on('connect', () => {
        console.log('socket connected');
      });
    }
  }, [socket]);

  useEffect(() => {
    initSocket();
  }, []);

  return (
    <div>
      <h3>Test Page</h3>
      <button key={'key'} type="button" onClick={handleLogin} value={'value'}>
        <Image
          src={`/icons/ic_logo_google.png`}
          alt={'value'}
          width={24}
          height={24}
        />
      </button>
      <button type="button" onClick={handleTest}>
        TEST BUTTON
      </button>
      <button type="button" onClick={connectHandle}>
        CONNECT SOCKET
      </button>
    </div>
  );
};

export default Home;
