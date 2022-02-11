import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Navbar</h1>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/lists">Lists</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
