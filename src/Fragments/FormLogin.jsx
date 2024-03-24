import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="emal" name="email" htmlFor="email" placeholder="example@mail.com" />
      <InputForm label="Password" type="password" name="password" htmlFor="password" placeholder="********" />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  )
}

export default FormLogin;
