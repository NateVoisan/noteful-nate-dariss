import React from 'react'
import Note from '../Note/Note'

export default function NoteContent(props) {
  return (
    <section className='NoteContent'>
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className='NoteContent__content'>
        {props.note.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}

NoteContent.defaultProps = {
  note: {
    content: '',
  }
}