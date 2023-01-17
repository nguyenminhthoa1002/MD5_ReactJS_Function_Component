import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import DataProvider from './components/DataProvider';

function App() {
  return (
    <div className="container">
      <DataProvider>
  {/* TITLE : START */}
  <Header></Header>
  {/* TITLE : END */}
  {/* CONTROL (SEARCH + SORT + ADD) : START */}
  <Control></Control>
  {/* CONTROL (SEARCH + SORT + ADD) : END */}
  {/* FORM : START */}
  <Form></Form>
  {/* FORM : END */}
  {/* LIST : START */}
  <List></List>
  </DataProvider>
</div>
  );
}

export default App;
