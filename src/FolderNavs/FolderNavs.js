import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from '../Button/Button'
import { countNotesForFolder } from '../HelperFunctions'

export default function FolderNavs(props) {
  return (
    <div className='FolderNavs'>
      <ul className='FolderNavs__list'>
        {props.folders.map(folder =>
          <li key={folder.id}>
            <NavLink
              className='FolderNavs__folder-link'
              to={`/folder/${folder.id}`}
            >
              <span className='FolderNavs__num-notes'>
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='FolderNavs__button-wrapper'>
        <Button
          tag={Link}
          to='/add-folder'
          type='button'
          className='FolderNavs__add-folder-button'
        >
          <br />
          Folder
        </Button>
      </div>
    </div>
  )
}

FolderNavs.defaultProps = {
  folders: []
}