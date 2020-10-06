import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css'


export default function Note(props) {
    return (
        <div className="flex-container">

            <div className="back-container">
                <nav className="back-nav"><button type="submit" for="back-nav" id="back-nav">Back</button></nav>
            </div>

            <div className="note-container">
                <div className="note">
                    <Link to='/' activeClassName='active'><h2 className="title">Note 1</h2></Link>
                        <p className="date">Date modified on 6th October 2020</p>
                        <button type="delete" for="delete-button" id="delete-button">Delete Note</button>
                </div>
            </div>

            <div className="note-description-container">
                <p className="note-description">Lorem ipsum blah blah description stuff blah blah</p>
            </div>
        </div>
    )
}