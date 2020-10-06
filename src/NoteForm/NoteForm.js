import React from 'react'
import './NoteForm.css'

export default function NoteForm() {
  const { className, ...otherProps } = props
  return (
    <div className="flex-container">
      <div className="back-container">
        <nav className="back-nav"><button type="submit" for="back-nav" id="back-nav">Back</button></nav>
      </div>
      <div className="add-note-container">
        <div className="add-note">
          <fieldset>
            <h2 className="title">Create a Note</h2>
            <label for="add-note-name">Name</label>
            <input for="add-note-name" />

            <label for="add-note-content">Content</label>
            <input for="add-note-content" />

            <label for="add-note-folder">Folder</label>
            <input for="add-note-content" />
            <button type="submit" for="add-button" id="add-button">Add Note</button>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
