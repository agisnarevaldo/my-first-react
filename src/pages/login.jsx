import FormLogin from "../Fragments/FormLogin"
import AuthLayout from "../Layouts/AuthLayout"

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  )
}

export default LoginPage;
