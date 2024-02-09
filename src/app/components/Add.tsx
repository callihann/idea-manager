"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
export default function Add() {
	const ideaInputRef = useRef<HTMLInputElement>(null);
	/**
	 * Handles the click event for the form submission.
	 * @param event - The form event.
	 */
	async function handleClick(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const json = JSON.stringify(Object.fromEntries(formData));
		const response = await fetch("http://localhost:3000/api/add", {
			// Post jsonified entry to the server
			method: "POST",
			body: json,
		});
		if (response.status !== 200) {
			console.log(response.status);
		} else {
			window.location.reload(); // This is utterly disgusting, but it works
		}
	}
	return (
		<div className="addIdea">
			<form onSubmit={handleClick}>
				<input type="text" placeholder="Add an idea" className="ideaInput text-green-600 py-2 px-4 rounded" ref={ideaInputRef} name="idea" />
				<button type="submit" id="addSubmit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Add
				</button>
			</form>
		</div>
	);
}
