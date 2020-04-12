import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// import KakaoLogin from 'react-kakao-login';
// import FacebookLogin from 'react-facebook-login';

function LoginForm({ authenticated, login, location }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  const responseGoogle = async (response) => {
      console.log("google popoup");
      console.log(response);
      // console.log(response.w3);
      console.log(response.profileObj.getName );
      console.log(response.profileObj.name );
      console.log(response.profileObj.email );
      console.log(response.profileObj.familyName) ;

      if(response.profileObj.givenName === 'Sun Ho') {
          // console.log(response.w3.getName());
          // // console.log(response.w3.getId());
          // console.log(response.w3.getEmail());
          // console.log(response.w3.getName());
          // console.log(response.w3.Paa);
          // console.log(response.w3.getImageUrl());
          console.log(response.profileObj.getName );
          console.log(response.profileObj.name );
          console.log(response.profileObj.email );
          console.log(response.profileObj.familyName) ;          
          // setLogged(true);
          // setID(response.w3.getId());
          // setName(response.w3.getName());
          // setProvider('google');      
          console.log(response.w3);
          const email = response.profileObj.email;
          const password = '123';
          login({ email, password });


      } else {
          console.log("google popoup33333333333333");

          alert('Failed to login');
          setEmail('');
          setPassword('');  
      }
  };  

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return <Redirect to={from} />;

  // const responseFacebook = (response) => {
  //   console.log(response);
  // }  

  return (
    <>
      <div align="center">    
            <h1>Login</h1>
            <input
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              type="text"
              placeholder="email"
            />
            <input
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              type="password"
              placeholder="password"
            />
            <button onClick={handleClick}>Login</button>
      </div>
      <br/>
      <div align="center">
        <h1>Social Login</h1>
          <GoogleLogin
              clientId="868600096434-qp8j8cjb8geil72d28n3p9n5r6t17is6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
          />
      </div>
      {/* <div align="center">
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </div>           */}
    </>
  );
}

export default LoginForm;