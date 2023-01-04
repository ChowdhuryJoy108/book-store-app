import Header from "./components/Header";
import Home from './components/Home';
import AddBook from './components/AddBook'
import Books from './components/Book/Books';
import BookDetails from './components/Book/BookDetails'
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Banner from './components/Banner';
function App() {
  return (
    <div>
      <header>
          <Header />
      </header>
     <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />}  exact/>
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/books/:id" element={<BookDetails />} exact />
        <Route path="/banner" element={<Banner />} exact />

      </Routes>
     </main>

    </div>
  );
}

export default App;
