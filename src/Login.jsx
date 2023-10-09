
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const Login = () => {
    const [userName,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const handleValid =()=>{
        const storedUserName=localStorage.getItem('userName');
        // console.log(storedUserName);
    const storedPassword=localStorage.getItem('password');
         if(userName===storedUserName && password===storedPassword){
            sessionStorage.setItem('userName',userName);
            // alert('welcome');
            window.location.href='/home'
        }else{
                alert("try again");
            }
         
  }
  return (
    <div>
        <Container maxWidth="sm">

        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', marginTop: '40px' }} >
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'red', paddingTop: 5 }} >Login</Typography>
          <div>
       <form>     
            <TextField
              label={'UserName'}
              variant='outlined'
              value={userName}
              onChange={e=>setUserName(e.target.value)}
              sx={{ width: "500px", mt: 6, ml: 3 }} />
            <TextField
              sx={{ mt: 7, width: '500px', ml: 3 }}
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={e=> setPassword(e.target.value)}
              variant="outlined"
            />
            </form>
            <Box textAlign={'center'}>
              <Button variant="contained" color="error" onClick={handleValid} sx={{ width: '250px', mt: 8, float: 'center' }}>
                Login
              </Button></Box>
          </div>
        </Box>

      </Container>
    </div>
  )
}

export default Login