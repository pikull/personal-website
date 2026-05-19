import Link from "next/link";
import Blur from "./Blur";

export default function NavBar(props) {
  return (
    <nav>
      <Blur height="135px" />
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
        }
      })}
    </nav>
  );
}
