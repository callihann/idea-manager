import { NextApiRequest, NextApiResponse } from "next";
import { addIdea } from "@/app/lib/api";

export async function GET() {
	return Response.json({ idea: "Hello World" });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	let bodyreq = await new Response(req.body).json(); // https://github.com/vercel/next.js/discussions/54355
	console.log(bodyreq["idea"]);
	addIdea(bodyreq["idea"]);
	return Response.json({ idea: bodyreq["name"] });
}
