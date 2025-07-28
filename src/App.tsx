import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
  // const [page, setPage] = useState(window.location.pathname);

  // const handleNavigation = (page: string) => {
  //   setPage(page);
  //   history.pushState({}, '', page);
  // };

  return (
    <div className="flex flex-col h-full">
      {/* <Navbar currentPage={page} navigate={handleNavigation} /> */}
      <Navbar />
      <Home />
      {/* {page === '/' && <Home />} */}
      {/* {page === '/projects' && <Projects />}
      {page === '/contact-me' && <Contact />} */}
    </div>
  );
}

export default App;
