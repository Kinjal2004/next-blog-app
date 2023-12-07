
import prisma from "@/db";
import BlogList from "@/components/BlogContainer";


export default async function Blog() {

  const Blogs = await prisma.Blog.findMany();
  return(
    <BlogList blogs={Blogs}/>
  )
}
