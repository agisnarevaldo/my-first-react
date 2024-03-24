import FormRegister from "../Fragments/FormRegister"
import AuthLayout from "../Layouts/AuthLayout"

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  )
}

export default RegisterPage;
