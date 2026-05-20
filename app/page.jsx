import NavBar from "components/NavBar";
import Link from "next/link";

import ThoughtsList from "components/ThoughtsList";
export default function Home() {
  return (
    <div className="-mt-12">
      <div className="text-center full-height" id="home">
        my name is akshun.
        <br />
        i really like computers. i also play badminton. i think a lot.
        <br />
        <br />
        <a href="mailto:akshun.chinara@gmail.com" className="link-under link-fade">
        akshun.chinara [at] gmail.com
        </a>
      </div>
    </div>
  );
}
