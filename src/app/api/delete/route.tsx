import { addIdea, removeIdea } from "@/app/lib/api";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	let bodyreq = await new Response(req.body).json(); // https://github.com/vercel/next.js/discussions/54355
	console.log(bodyreq["idea"]);
	removeIdea(bodyreq["idea"]);
	return Response.json({ idea: bodyreq["idea"] });
}
