import { NextPage } from 'next';

const LoginForm: NextPage = (props): JSX.Element => {
  return (
    <div className="sign-in-form">
        <form className="flex text-center">
            <input className="border" type="email" placeholder="Email"></input>
            <input className="border" type="password" placeholder="Password"></input>
            <input className="border" type="submit" value="login"></input>
        </form>
    </div>
  )
}

export default LoginForm;