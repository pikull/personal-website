import NavBar from "components/NavBar";
import Link from "next/link";

import ThoughtsList from "components/ThoughtsList";
import Contact from "components/Contact";

const navItems = [
  { path: "/#home", name: "home", type: "anch" },
  { path: "/#thoughts", name: "thoughts", type: "anch" },
  { path: "/#contact", name: "contact", type: "anch" },
];

export default function Home() {
  return (
    <div>
      <NavBar navItems={navItems} />
      <div className="full-height" id="home">
        my name is akshun <br />
      </div>

      <div className="full-height" id="thoughts">
        recent thoughts:
        <ThoughtsList length={10} />
        <Link href="/blog" className="link-under link-fade">
          more thoughts
        </Link>
      </div>

      <Contact />
    </div>
  );
}
