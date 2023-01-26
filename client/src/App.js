import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="blogs">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </section>
    </div>
  );
}

export default App;
