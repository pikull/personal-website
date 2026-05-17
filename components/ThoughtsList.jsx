import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";

export default async function ThoughtsList(props) {
  const n = props.length;

  const dirName = path.join(process.cwd(), "content");
  const files = fs.readdirSync(dirName);

  const posts = files.map((file) => {
    const filePath = path.join(dirName, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter } = matter(fileContent);

    return {
      frontmatter,
      slug: path.parse(file).name,
    };
  });

  posts.sort((a, b) => {
    const dateDiff =
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    
    return dateDiff !== 0
      ? dateDiff
      : a.frontmatter.title.localeCompare(b.frontmatter.title);
  });

  const displayedPosts = (n >= 0) ? posts.slice(0, n) : posts;

  return (
    <div className="inline-flex flex-col gap-6 m-6 mt-16">
      {displayedPosts.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`} className="link-fade">
          <div>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <p>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                timeZone: "UTC",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>{post.frontmatter.desc}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
}
