import React from 'react';
import Button from '../Button/Button';
import './NoteBack.css';

export default function NoteBack(props) {
    return (
        <div className='NoteBack'>
            <Button
                tag='button'
                role='link'
                onClick={() => props.history.goBack()}
                className='NoteBack__back-button'
            >
                <br />
        Back
      </Button>
            {props.folder && (
                <h3 className='NoteBack__folder-name'>
                    {props.folder.name}
                </h3>
            )}
        </div>
    )
}

NoteBack.defaultProps = {
    history: {
        goBack: () => { }
    }
}