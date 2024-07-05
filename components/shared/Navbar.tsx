import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2 flex justify-between items-center container">
      <h3>Ibrahim</h3>
      <div className="flex">
        <Link href="/" className="inline-flex py-2 px-4 hover:text-green-500">
          Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex py-2 px-4 hover:text-green-500">
          Projects
        </Link>
        <Link
          href="/skills"
          className="inline-flex py-2 px-4 hover:text-green-500">
          Skills
        </Link>
        <Link
          href="/blogs"
          className="inline-flex py-2 px-4 hover:text-green-500">
          Blogs
        </Link>
        <Link
          href="/contact"
          className="inline-flex py-2 px-4 hover:text-green-500">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
