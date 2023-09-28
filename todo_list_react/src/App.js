import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ToDoList from './ToDoList';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ToDoList />
        <Footer />
      </div>
    );
  }
}

export default App;
