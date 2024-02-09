import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getIdeas() {
	const ideas = await prisma.idea.findMany();
	return ideas;
}

export async function addIdea(idea: string) {
	const newIdea = await prisma.idea.create({
		data: {
			idea: idea,
		},
	});
	return newIdea;
}

export async function removeIdea(idea: string) {
	const removedIdea = await prisma.idea.delete({
		where: {
			idea: idea,
		},
	});
	return removedIdea;
}
