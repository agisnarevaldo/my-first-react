import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = "/home";
    // window.location.href = "/products";
  }
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="emal"
        name="email"
        htmlFor="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        htmlFor="password"
        placeholder="********"
      />
      <Button
        classname="bg-primary w-full"
        type="submit"
      >
        Login
      </Button>
    </form>
  )
}

export default FormLogin;
