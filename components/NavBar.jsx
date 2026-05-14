import Link from "next/link";

const navItems = [
  { path: "/", name: "home" },
  { path: "/blog/", name: "thoughts" },
];

export default function NavBar() {
  return (
    <nav className="nav">
      {navItems.map(({ path, name }) => (
        <Link className="link" key={path} href={path}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
