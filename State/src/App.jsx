import "./App.css";
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="simon" age="30" isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Ian" age={50} isStudent={false} />
      <Student name="James" age={22} isStudent={true} />
      <Student name="Larry" />
    </>
  );
}

export default App;
