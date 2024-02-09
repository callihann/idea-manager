"use client";
export async function IdeasList(ideas: any) {
	const ideaList = [];
	const ideaAccessor = ideas["ideas"];

	function handleClick(value: string) {
		var elem = document.getElementById(value);
		fetch("http://localhost:3000/api/delete", { // post jsonified entry to the server and delete the idea
			method: "POST",
			body: JSON.stringify({ idea: elem?.textContent }),
		});
		return elem?.remove();
	}

	for (const key in ideaAccessor) {
		ideaList.push(
			<button key={key} id={key} onClick={(e) => handleClick(key)}>
				{ideaAccessor[key]["idea"]}
			</button>
		);
	}
	// return <div>{ideaList}</div>;
	return <div id="ideaDiv">{ideaList}</div>;
}
