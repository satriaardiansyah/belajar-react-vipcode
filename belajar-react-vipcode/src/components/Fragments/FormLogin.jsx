import Button from '../Elements/Button/button';
import InputForm from '../Elements/Input';


const FormLogin = () => {
    return (
        <form action="">
        <InputForm label="Email" name="email" type="email" placeholder="contoh@gmail.com" />
        <InputForm label="Password" name="password" type="password" placeholder="********" />
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
    )
}

export default FormLogin;