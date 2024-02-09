import Add from "./components/Add";
import { IdeasList } from "./components/IdeasList";
import { getIdeas } from "@/app/lib/api";

export default async function Home() {
	const fetchedIdeas = await getIdeas();
	return (
		<main>
			<div id="topLevelIdeaDiv">
				<h1 className={"text-4xl p-3 font-bold text-green-600"}>Idea Manager</h1>
				<Add />
			</div>
			<IdeasList ideas={fetchedIdeas} />
		</main>
	);
}
