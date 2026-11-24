function Student(props) {
  return (
    <div className="student">
      <h3>{props.name}</h3>
      <p>Roll No: {props.roll}</p>
      <p>Branch: {props.branch}</p>
    </div>
  );
}

export default Student;