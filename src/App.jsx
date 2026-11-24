import Student from './Student';
import './App.css';

function App() {
  return (
    <div>
      <h1>Students List</h1>

      <Student name="Rahul" roll="101" branch="CSE" />
      <Student name="Priya" roll="102" branch="ECE" />
      <Student name="Arjun" roll="103" branch="IT" />
      <Student name="Sneha" roll="104" branch="CSE" />
      <Student name="Kiran" roll="105" branch="EEE" />

    </div>
  );
}

export default App;