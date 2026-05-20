import "./globals.css";
import NavBar from "components/NavBar";

const navItems = [
  { path: "/", name: "home", type: "link" },
  { path: "/thoughts", name: "thoughts", type: "anch" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mb-12">
        <NavBar navItems={navItems} /></div>
        {children}
      </body>
    </html>
  );
}
