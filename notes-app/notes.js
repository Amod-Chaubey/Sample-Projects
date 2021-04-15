const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title);

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note Added"));
  } else {
    console.log(chalk.red("TITLE TAKEN"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green("Note Remove"));
  } else {
    console.log(chalk.red("No Note Found"));
  }
  saveNotes(notesToKeep);
};

const listNote = () => {
  const notelist = loadNotes();
  console.log(chalk.blue("YOUR NOTES"));
  notelist.forEach((note) => {
    console.log(note.title);
    // console.log(note.body);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const findNotes = notes.find((note) => note.title === title);
  if (findNotes) {
    console.log(chalk.green.inverse(findNotes.title));
    console.log(findNotes.body);
  } else {
    console.log(chalk.red.inverse("no note found"));
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
// exporting function in a object
