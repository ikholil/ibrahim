import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-3 bg-neutral-900 text-neutral-50">
      <div className="flex gap-4 items-center justify-between container ">
        <p>Ibrahim&apos;s Portfolio&copy; {new Date().getFullYear()}</p>
        <div className="flex">
          <Link className="py-2 px-4 hover:text-primary" href="/">
            Home
          </Link>
          <Link className="py-2 px-4 hover:text-primary" href="/blogs">
            Blogs
          </Link>
          <Link className="py-2 px-4 hover:text-primary" href="/support">
            Support
          </Link>
          <Link className="py-2 px-4 hover:text-primary" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
