import { useState ,useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import './Login.css'


function Login() {
  
  const clientId = "1082226744345-c3bjupiqh11mv9ffiqrjpf7co3j4vn84.apps.googleusercontent.com"
  
  const [count, setCount] = useState(0)

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])

  const onSuccess = (res) => {
    console.log('success', res)
  }

  const onFailure = (res) => {
    console.log('failed', res)
  }

  return (
    
    <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'Single_host_origin'}
        isSignedIn={true}
      />
      
  )
}
export default Login;