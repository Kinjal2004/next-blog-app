import prisma from "@/db";
import { NextResponse } from "../../../../node_modules/next/server";
import { parse } from "url";

export async function DELETE(req: Request) {
  try {
    const { query } = parse(req.url, true);
    const id = query.id as string;

    await prisma.Blog.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
  }
}
