import "./App.css";
import NoteList from "./component/NoteList";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Search from "./component/Search";
import Header from "./component/Header";

function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "First note",
			date: "9/04/2023",
		},
		{
			id: nanoid(),
			text: "Second note",
			date: "9/04/2023",
		},
		{
			id: nanoid(),
			text: "third note",
			date: "9/04/2023",
		},
	]);

	const [searchText, setSearchText] = useState("");
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const saveNotes = JSON.parse(localStorage.getItem("mitchell-note-app"));

		if (saveNotes) {
			setNotes(saveNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("mitchell-note-app", JSON.stringify(notes));
	}, [notes]);

	const addText = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};

		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deletText = (id) => {
		const newNote = notes.filter((note) => note.id !== id);
		setNotes(newNote);
	};

	return (
		<main className={`${darkMode && "dark-mode"} `}>
			<div className="container">
				<Header handleToggleDark={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NoteList
					notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
					handleAddNote={addText}
					handleDelet={deletText}
				/>
			</div>
		</main>
	);
}

export default App;
