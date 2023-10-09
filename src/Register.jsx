import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handlesign = () => {
    //   const Signin=JSON.parse(localStorage.getItem('Signin')||'[]')//we are getting in by array
    //   const signin={                //store all datas in varaiable
    //     firstName:firstName,
    //     lastName:lastName,
    //     userName:userName,
    //     password:password
    //   }
      reset()
    //   Signin.push(signin)//pushing it to array
      localStorage.setItem('firstName',firstName);
      localStorage.setItem('lastName',lastName);
      localStorage.setItem('userName',userName);
      localStorage.setItem('password',password);//using that variable we store to local storage in Sigin
      console.log(firstName);
      console.log(lastName);
      console.log(userName);
      console.log(password);
    }
    
    const reset = () => {
      setFirstName('');
      setLastName('');
      setUserName('');
      setPassword('')
    }
    
  return (
    <div>
      <Container maxWidth="sm" Paper>
        <Box sx={{ bgcolor: 'wheat', height: '100vh', mt: '30px' }} >
          <Typography variant="h2" sx={{ textAlign: 'center', paddingTop: 5 }}>
            Sign In
          </Typography>
          <TextField sx={{ mt: 5, width: '500px', ml: 2 }}
            id="outlined-basic"
            label="First Name"
            onChange={e =>
              setFirstName(e.target.value)}
            value={firstName}
            variant="outlined" />
          <TextField sx={{ mt: 3, width: '500px', ml: 2 }}
            id="outlined-basic"
            label="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
            variant="outlined" />
          <TextField sx={{ mt: 3, width: '500px', ml: 2 }}
            id="outlined-basic"
            label="User Name"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            variant="outlined" />
          <TextField sx={{ mt: 3, width: '500px', ml: 2 }}
            id="outlined-basic"
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="outlined" />
            <Link to="/Login">
          <Box sx={{ textAlign: 'center' }}>
            <Button variant='contained' color='success' onClick={handlesign} sx={{ mt: 4, width: '250px' }}>Sign In</Button></Box>
            </Link>
        </Box>
      </Container>
    </div>
  )
}

export default Register