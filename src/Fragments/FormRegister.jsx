import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        name="fullname"
        htmlFor="fullname"
        placeholder="Insert your full name here..."
      />
      <InputForm
        label="Email"
        type="emal"
        name="email"
        htmlFor="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="password"
        type="password"
        name="password"
        htmlFor="password"
        placeholder="********"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        htmlFor="confirmPassword"
        placeholder="********"
      />
      <Button classname="bg-primary w-full">Register</Button>
    </form>
  )
}

export default FormRegister;
