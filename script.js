
let updateLSData = () => {
    let textAreaData = document.querySelectorAll('textarea');
    let notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}

let addNote = (text = '') => {
    let Note = document.createElement('div');
    Note.classList.add('note');
    let textnote = document.getElementsByClassName('fun');

    let htmlData = `
    <span class="operation">
        <button class="delete"><i class="far fa-trash-alt"></i></button>
        <button class="edit"><i class="far fa-edit"></i></button>
    </span>
    <div class="main ${text ? "" : "hidden"} "></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    Note.insertAdjacentHTML('afterbegin', htmlData);
    document.querySelector('.container').appendChild(Note);
    let editButton = Note.querySelector('.edit');
    let deleteButton = Note.querySelector('.delete');
    let mainDiv = Note.querySelector('.main');
    let textarea = Note.querySelector('textarea');

    deleteButton.addEventListener('click', () => {
        Note.remove();
        updateLSData();
    })

    textarea.value = text;
    mainDiv.innerHTML = text;

    toggleEdit = () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    }

    textarea.addEventListener('change', (event) => {
        let value = event.target.value;
        mainDiv.innerHTML = value;
        updateLSData();

    })
    editButton.addEventListener('click', () => toggleEdit());
}
let Body = document.querySelector('body');
const addButton = document.getElementById('add');
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
    const backgroundColor1 = Body.style.backgroundColor;
    if (backgroundColor1 == 'black') {
        Body.style.backgroundColor = 'white';
        Body.style.color = 'black';
    } else {
        Body.style.backgroundColor = 'black';
        Body.style.color = 'white';
    }
});
let notes = JSON.parse(localStorage.getItem('notes'));
if (notes) {
    notes.forEach((note) => addNote(note));
}

addButton.addEventListener('click', () => addNote());

