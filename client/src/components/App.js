import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Header from './Header';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
      <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
    );
}
 
export default App;