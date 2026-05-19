import ThoughtsList from "components/ThoughtsList";
import NavBar from "components/NavBar";

const navItems = [
  { path: "/#thoughts", name: "back", type: "link" },
];

export default async function Blog() {
  return (
    <div className="mt-12" id="top">
      <NavBar navItems={navItems} />
      <ThoughtsList />
    </div>
  );
}
