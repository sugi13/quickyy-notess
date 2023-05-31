let TitleInput = document.getElementById('title');
let NoteInput = document.getElementById('text');
let AddNoteButton = document.getElementById('add-btn');

let NotesHolder = document.querySelector('.notes-holder');


let notes = [];

window.onload = displayNote;

// show notes on window //
function displayNote(){ 
    let noteData = [...JSON.parse(localStorage.getItem('notes'))];

    noteData.forEach((note) => {
        let title = document.createElement('h2');
        let noteText = document.createElement('p');
        let NotesBox = document.createElement('div');
        let ButtonBox = document.createElement('div');
        let removeBox = document.createElement('button');

        title.innerHTML = note.title;
        noteText.innerHTML = note.note;
        removeBox.innerHTML = `<i class="ai-trash-can"></i>`;
        removeBox.setAttribute('onclick', 'removeNote(event)');
        ButtonBox.appendChild(removeBox);

        NotesBox.appendChild(title);
        NotesBox.appendChild(noteText);
        NotesBox.appendChild(removeBox);

        NotesHolder.appendChild(NotesBox);
    })
}

// create Note //
function CreateNote(){
   if(TitleInput.value === '' && NoteInput.value === ''){
    alert('Add something!');
    location.reload();
   }
   else{
    let newNote = {
        title: TitleInput.value,
        note: NoteInput.value,
    }
    notes.push(newNote);

    localStorage.setItem('notes', JSON.stringify(notes));

     titleText = document.createElement('h2');
     noteText = document.createElement('p');
     NotesBox = document.createElement('div');
     let ButtonBox = document.createElement('div');
     let removeBox = document.createElement('button');

    titleText.innerHTML = newNote.title;
    noteText.innerHTML = newNote.note;
    removeBox.innerHTML = `<i class="ai-trash-can"></i>`;
    removeBox.setAttribute('onclick', 'removeNote(event)');
    ButtonBox.appendChild(removeBox);

    NotesBox.appendChild(titleText);
    NotesBox.appendChild(noteText);
    NotesBox.appendChild(removeBox);

    NotesHolder.appendChild(NotesBox);

    TitleInput.value = '';
    NoteInput.value = '';
   }
}

// remove note //
function removeNote(event){
    let element = event.target.parentNode.parentNode;
    element.remove();

    let noteData = [...JSON.parse(localStorage.getItem('notes'))];

    // remove element from array //
    let filterData = noteData.filter((item) => item.title !== element.firstChild.innerHTML);

    // update local storage //
    localStorage.setItem('notes', JSON.stringify(filterData)); 
}

AddNoteButton.addEventListener('click', CreateNote);