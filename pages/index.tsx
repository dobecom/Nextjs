import Image from 'next/image';
import axios from 'axios';

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

  return (
    <div>
      <h3>Login</h3>
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
    </div>
  );
};

export default Home;
