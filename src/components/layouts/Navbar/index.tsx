import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div>
        <Link href="#">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
      </div>
      <div>
        <Link href={"auth/login"}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
