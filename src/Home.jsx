import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';
const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [array, setArray] = useState([])
  const [editIndex, setEditIndex] = useState('')
  const [gender,setGender]=useState('')
  const reset = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setGender('');
  }


  const handleAddData = () => {
    if (firstName && lastName && age) {
      const data = {
        firstName,
        lastName,
        age,
        gender
      };
      setArray([...array, data])
      reset()
    } else {
      alert('Please Fill All the field')
    }
  }

  function remove(index) {
    console.log(index, 'this row want to be deleted')
    let total = [...array]
    total.splice(index, 1)
    setArray(total)
  }

  const [editData, setEditData] = useState(null)
  function editInfo(index) {

    // Set index in editIndex for Update
    setEditIndex(index)

    // Store array in Total
    let total = array[index]

    // or say editData not null
    setEditData(total);

    // Text Field
    setFirstName(total.firstName);
    setLastName(total.lastName);
    setAge(total.age);
    setGender(total.gender)
  }

  function handleUpdateData() {
    // Get All array data in Update Data
    const updateData = [...array];

    // store text Field Data in data
    const data = {
      firstName,
      lastName,
      age,
      gender
    }
    // set update data based on its index
    updateData[editIndex] = data;

    // Update array
    setArray(updateData)

    // Make Update button null show add Button
    setEditData(null)

    // clear text fields
    reset();
  }
  const handleupdatetab=()=>{
    // const string=gender;
    // for (let i=0;i<array.length;i++){
    //   // console.log(array[i]);
    //   console.log(string)
    //  const data={
    //  string
    //  }
    // Update.push(string);
    // setGender(data)
    // console.log(string)
    // }
    const newGender=gender;
      const updatedArray = array.map((item) => ({
    ...item,
    gender: newGender,
     }));
     setArray(updatedArray);
     setGender("");
  }
  return (
    <div>
      <Paper elevation={3} sx={{ width: '1000px', height: '1000px', ml: 20 }}>
        <Container maxWidth="md" sx={{ mt: 6, padding: 4 }}>
          <form >
            <TextField sx={{ ml: 7 }}
              id="outlined-basic"
              type='text'
              onChange={e => setFirstName(e.target.value)}
              label="First Name"
              value={firstName}
              variant="outlined" />

            <TextField sx={{ ml: 4 }}
              id="outlined-basic"
              onChange={e => setLastName(e.target.value)}
              label="Last Name"
              value={lastName}
              variant="outlined" />

            <TextField sx={{ ml: 4 }}
              id="outlined-basic"
              onChange={e => setAge(e.target.value)}
              label="Age"
              value={age}
              variant="outlined" />
            <TextField sx={{ mt:3, ml:7 }}
              id="outlined-basic"
              onChange={e => setGender(e.target.value)}
              label="Gender"
              value={gender}
              variant="outlined" />
               
          </form>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button  variant="contained" onClick={handleupdatetab} sx={{ width: '200px', mt: 2,mr:7 }}>update table</Button>
            {editData ? (
              <Button variant="contained" onClick={handleUpdateData} sx={{ width: '200px', mt: 2 }}>Update</Button>
            ) : (
              <Button variant="contained" onClick={handleAddData} sx={{ width: '200px', mt: 2 }}>Add</Button>
            )}
          </Box>
          {/* <div>
          <table>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </thead>
            <tbody>
              {inputValue.map((data,index)=>(
               <tr key={index}>
               <td>{data.firstName}</td>
               <td>{data.lastName}</td>
               <td>{data.age}</td>
             </tr>
           ))}
            </tbody>
          </table>
          </div> */}
          <TableContainer component={Paper} sx={{ mt: 5 }} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align='center'>Gender</TableCell>
                  <TableCell align='center'>Actions</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {array && array.map((data, index) => (
                  <TableRow
                    key={index}
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell sx={{ textAlign: 'center' }}>{data.firstName}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{data.lastName}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{data.age}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{data.gender}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}><Button
                      onClick={() => editInfo(index)}
                    ><ModeEditIcon /></Button><Button onClick={remove}>< DeleteIcon /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Link to="/Content">
          <Box textAlign={'center'}>
          <Button variant="contained"  sx={{ width: '200px', mt: 2 }}>Submit</Button></Box></Link>
        </Container>
      </Paper>
    </div>
  )
}

export default Home