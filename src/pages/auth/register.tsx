import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Halaman Register</h1>
      <p>
        Sudah punya account? <Link href={"/auth/login"}>klik disini</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
