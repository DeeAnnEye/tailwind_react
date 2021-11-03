// import logo from './logo.svg';
import "./App.css";
// import './components'
import NavBar from "./components/NavBar";
import PageBar from "./components/PageBar";
import DetailsTable from "./components/DetailsTable";
import UserTable from "./components/UserTable";
import LinksTable from "./components/LinksTable";
import EditTable from "./components/EditTable";

function App() {
  return (
    <div className="App">
      <div class="min-h-full">
        <NavBar />
        <PageBar />
        <div className=" flex flex-row px-4 gap-4 py-4 flex-wrap bg-white shadow">
          <DetailsTable />
          <UserTable />
          <LinksTable />
        </div>
        <EditTable />
      </div>
    </div>
  );
}

export default App;
