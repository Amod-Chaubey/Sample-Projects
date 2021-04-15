const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Adding a new note",
  builder: {
    title: {
      describe: "notes title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body Of Note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Delete the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing All The Notes",
  handler() {
    notes.listNote();
  },
});

yargs.command({
  command: "read",
  describe: "Reading All The Notes",
  builder: {
    title: {
      describe: "tittle of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(args) {
    notes.readNote(args.title);
  },
});
// console.log(yargs.argv);
yargs.parse();
