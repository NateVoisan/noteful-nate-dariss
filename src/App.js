import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { getNotesForFolder, findNote, findFolder } from './HelperFunctions';
import MainPage from './MainPage/MainPage';
import FolderNavs from './FolderNavs/FolderNavs';
import NoteBack from './NoteBack/NoteBack';
import NoteContent from './NoteContent/NoteContent';
import DummyStore from './DummyStore';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(DummyStore), 600)
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => (
              <FolderNavs
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NoteBack {...routeProps} folder={folder} />;
          }}
        />
        <Route path="/add-folder" component={NoteBack} />
        <Route path="/add-note" component={NoteBack} />
      </>
    );
  }


  renderMainRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params;
              const notesForFolder = getNotesForFolder(
                notes,
                folderId
              );
              return (
                <MainPage
                  {...routeProps}
                  notes={notesForFolder}
                />
              );
            }}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NoteContent {...routeProps} note={note} />;
          }}
        />
      </>
    );
  }


  render() {
    return (
      <div className="App">
        <nav className="App__nav">{this.renderNavRoutes()}</nav>
        <header className="App__header">
          <h1>
            <Link to="/">Noteful</Link>{' '}
          </h1>
        </header>
        <main className="App__main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}


export default App;