import Header from "./Header";
import Search from "./Search";
import Content from "./Weather";



function App() {
  return (
    <div className="container-fluid">
        <Header />
        <Search />
        <Content />
    </div>
  );
}

export default App;
