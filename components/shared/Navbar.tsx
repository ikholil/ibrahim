import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 flex justify-between items-center container">
      <h3>Ibrahim</h3>
      <div className="flex">
        <Link href="/" className="inline-flex py-2 px-4 hover:text-primary">
          Home
        </Link>
        <Link href="/projects" className="inline-flex py-2 px-4 hover:text-primary">
          Projects
        </Link>
        <Link href="/skills" className="inline-flex py-2 px-4 hover:text-primary">
          Skills
        </Link>
        <Link href="/blogs" className="inline-flex py-2 px-4 hover:text-primary">
          Blogs
        </Link>
        <Link href="/contact" className="inline-flex py-2 px-4 hover:text-primary">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
