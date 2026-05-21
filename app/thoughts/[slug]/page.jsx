import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const htmlContent = marked.parse(content);

  return (
    <main>
      <div className="mx-auto mt-24 mb-6 w-full max-w-2xl px-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{frontmatter.title}</h1>
        <p className="mt-2 text-xs">{new Date(frontmatter.date).toLocaleDateString("en-US", {
          timeZone: "UTC",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}</p>
        <hr className="my-6" />
        <div className="max-w-none text-left" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </main>
  );
}
