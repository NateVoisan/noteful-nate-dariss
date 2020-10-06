import React from 'react'
import './MainPage.css'


export default function MainPage() {
  return (
    <div className="flex-container">

      <div className="folder-container">
        <nav className="folder-nav"><button type="submit" for="folder-nav" id="folder-nav">Folder 1</button></nav>
        <nav className="folder-nav"><button type="submit" for="folder-nav" id="folder-nav">Folder 2</button></nav>
        <nav className="folder-nav"><button type="submit" for="folder-nav" id="folder-nav">Folder 3</button></nav>
        <button type="submit" for="folder-nav" id="add-folder-nav">Add Folder</button>
      </div>

      <div className="note-container">

        <div className="note">
            <Link to='/' activeClassName='active'><h2 className="title">Note 1</h2></Link>
            <p className="date">Date modified on 6th October 2020</p>
            <button type="delete" for="delete-button" id="delete-button">Delete Note</button>
        </div>
      </div>

      <button type="submit" for="note" id="add-note">Add Note</button>

    </div>
  )
}