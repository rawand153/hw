import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tableData, setTableData] = useState([]);
  const [newName, setNewName] = useState('');
  const submit = () => {
      const newEntry = { name, email, phoneNumber };

      setTableData([...tableData, newEntry]);
      setName('');
      setEmail('');
      setPhoneNumber('');
    
  };

  const update=(index)=>{
      const updatedData = [...tableData];
      updatedData[index].name = newName;
      setTableData(updatedData);
      setNewName('');
  }

  const clearRow = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  


  return (
    <>
      <label >First Name: </label><input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <label >Email: </label><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <label >Phone: </label> <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br /><br />
      <button className='btn btn-primary' onClick={submit} >Submit</button> <br /><br />


      <hr />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.phoneNumber}</td>
              <td>  
              <button className='btn btn-danger' onClick={() => clearRow(index)} >clear</button>
              <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/>
              <button onClick={() => update(index)}><span className="material-symbols-outlined">edit</span></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default App
