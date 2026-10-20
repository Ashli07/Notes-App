let notes=JSON.parse(localStorage.getItem('notes'))||[];
function saveNotes(){
    localStorage.setItem('notes',JSON.stringify(notes));
}
function renderNotes(){
    let list = document.getElementById('tasklist');
    list.innerHTML="";

    notes.forEach(function(note,index){
        let li = document.createElement('li');
        li.textContent=note;
    

        let editBtn = document.createElement('button');
        editBtn.textContent="✏️";
        editBtn.onclick= function(){editNote(index);};

        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent="🗑️";
        deleteBtn.onclick= function(){deleteNote(index);};

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);

    });
}
function addButton(){
    let input= document.getElementById('display');
    let text= input.value.trim();
    if (text==="")return;
    notes.push(text);
    
    saveNotes();
    renderNotes();
    input.value ="";
}

function editNote(index){
    let newText=prompt("edit your note:",notes[index]);
    if(newText!==null&&newText.trim()!==""){
        notes[index]=newText.trim();
        saveNotes();
        renderNotes();

    }
}

function deleteNote(index){
    notes.splice(index,1);
    saveNotes();
    renderNotes();

}
renderNotes();