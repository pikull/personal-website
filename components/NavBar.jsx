import Link from "next/link";

export default function NavBar(props) {
  return (
    <nav>
      {props.navItems.map(({ path, name, type }) => {
        switch (type) {
          case "link":
            return (
              <Link className="link-under link-fade" key={path} href={path}>
                {name}
              </Link>
            );

          case "anch":
            return (
              <a className="link-under link-fade" key={path} href={path}>
                {name}
              </a>
            );

          case "none":
            return <p>{name}</p>;

          default:
            return null;
        }
      })}
    </nav>
  );
}
