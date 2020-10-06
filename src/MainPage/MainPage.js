import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import Button from '../Button/Button'
import './MainPage.css'

export default function MainPage(props) {
  return (
    <section className='MainPage'>
      <ul>
        {props.notes.map(note =>
          <li key={note.id}>
            <Note
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        )}
      </ul>
      <div className='MainPage__button-container'>
        <Button
          tag={Link}
          to='/add-note'
          type='button'
          className='MainPage__add-note-button'
        >
          <br />
          Note
        </Button>
      </div>
    </section>
  )
}

MainPage.defaultProps = {
  notes: [],
}