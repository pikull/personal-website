import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import NavBar from "components/NavBar";

const navItems = [{ path: "/blog", name: "back", type: "link" }];

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const htmlContent = marked.parse(content);

  return (
    <main>
      <NavBar navItems={navItems} />
      <div className="m-6 mt-26">
        <h1>{frontmatter.title}</h1>
        <p>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            timeZone: "UTC",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </main>
  );
}
