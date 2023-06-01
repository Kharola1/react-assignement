import LoginPage from "./components/LoginPage";
import TableView from "./components/TableView";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <hr/>
      <UserForm/>
      <hr/>
      <TableView/>
    </div>
  );
}

export default App;
