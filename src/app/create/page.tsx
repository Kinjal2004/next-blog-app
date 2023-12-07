
import prisma from "@/db";
import { create } from "domain";
import {redirect} from "next/navigation"
import Alert from "@/components/AlertMessage"

async function createBlog(data: FormData){
    "use server"
    const title = data.get("title")?.valueOf();
    const text = data.get("content")?.valueOf();

    
    if(typeof title !== "string" || title.length === 0){
        console.log("Invalid Title")
        return <Alert text={"Inavlid Title"}/>
    }

    if(typeof text !== "string" || text.length === 0){
        console.log("Invalid Text")
        return <Alert text={"Inavlid Text"}/>
    }

    await prisma.Blog.create({
        data:{
            Title: title,
            Text : text,
        }
    })

    redirect(`/posts`);
}

function WritePage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={createBlog} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full md:w-2/3 lg:w-1/2">
        <div className="mb-4">
          <label
            className="block text-slate-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white bg-slate-700 leading-tight focus:outline-none focus:shadow-outline rounded"
            name="title"
            type="text"
            placeholder="Blog Title"        
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="bg-slate-700 text-white h-64 w-full py-2 px-3 focus:outline-none font-mono rounded"
            name="content"
            placeholder="Blog Content"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-700 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WritePage;
