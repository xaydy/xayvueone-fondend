import React, {useState} from 'react'
import { Typography, TextField, Stack, Box, Button } from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Loing() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = () => {
        axios({
            url: 'https://react123week7.vercel.app/',
            method: 'post',
            data: {
                email: email,
                password: password
            }
        }).then(res => {
            switch (res.data.status) {
                case 200:
                    alert(res.data.msg)
                    navigate('/')
                    break;
                case 404:
                    alert(res.data.msg)
                    break
                default:
                    alert('Loing failed')
                    break;
            }
        })
    }

    return (
        <Box height={'100vh'} display='flex' flexDirection={'column'} justifyContent='center'>
            <Typography variant='h1' align='center'>Login</Typography>
            <Stack spacing={2} display={'flex'} alignItems='center'>
                <TextField label='email' onChange={(e)=> setemail(e.target.value)} fullWidth sx={{ width: '30%' }} />
                <TextField label='password' onChange={(e)=> setpassword(e.target.value)} fullWidth sx={{ width: '30%' }} />
                <Button variant='contained' onClick={handleLogin}>Login</Button>
            </Stack>
        </Box>
    )
}