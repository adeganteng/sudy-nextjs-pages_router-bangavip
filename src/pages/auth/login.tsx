import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    const { push } = useRouter()
    const handleSubmit = () => {
        push("/product")
    }
  return (
    <div>
          <h1>Halaman Login</h1>
          <button onClick={() =>{handleSubmit()}}>login</button>
          <p>Belum punya account? <Link href={"/auth/register"}>klik disini</Link></p>
    </div>
  );
};

export default LoginPage;
