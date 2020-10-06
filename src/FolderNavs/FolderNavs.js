import React from 'react'
import './MainPage.css'


export default function FolderNavs() {
    return (
        <div className="folder-container">
            <nav className="folder-nav"><button type="submit" for="folder-nav" id="folder-nav">Folder 1</button></nav>
            <nav className="folder-nav"><button type="submit" for="folder-nav" id="folder-nav">Folder 2</button></nav>
            <nav className="folder-nav"><button type="submit" for="folder-nav" id="folder-nav">Folder 3</button></nav>
            <button type="submit" for="folder-nav" id="add-folder-nav">Add Folder</button>
        </div>
    )
}