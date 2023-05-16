import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Stack,Autocomplete } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { redirect } from 'next/dist/server/api-utils';
import axios from 'axios';
// import Select from '../component/Select';
import { useRouter } from 'next/router';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CreateUserForm = (props) => {
    //STYLING
    const router = useRouter();
    const [password, setPassword] = React.useState('')
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [level, setLevel] = React.useState(null);
    const [age, setAge] = React.useState('');
    const [error, setError]= React.useState(false);
    const [value, setValue]= React.useState('');
    const [inputvalue, setInputvalue] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // const [Datas, setDatas] = useState([]);

    // console.log('Data:', Datas);
    const paperStyle = { padding: 20, height: 'auto', width: 400, margin: "0 auto", marginTop:'5rem', borderRadius:'15px 15px 15px 15px' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0',background:'linear-gradient(to right bottom, #430089, #82ffa1)', color:'#FFFF' }
    //STATE
    const initialValues = {
        name: '',
        email: '',
        password: '',
        level: ''
    }
    //VALIDATION 
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(4,'too Short').max(50, 'too long').required("Required"),
        email: Yup.string().required('Required'),
        password: Yup.string().min(4,'too Short').max(50, 'too long').required("Required"),
        password: Yup.string().required("Required"),
    })
    //FUNCTION TO LOGIN
  
    const login = async () => {
    if(validationSchema){
        const response = await axios.post('http://localhost:3000/api/userList',{
            studentName: name,
            studentId: email,
            password: password,
            level: level.level,
            status: true
        })
        console.log(response)
        if(response.data.success) {
            console.log(response)
            router.replace('/users/userList')
        } 
        else setError(true) 

    }}
    useEffect(() => {
        fetch('http://localhost:3000/api/content')
            .then((response) => response.json())
            .then((data) => setValue(data))
    }, []);
    const editUser = async () =>{
        const response = await axios.post(`http://localhost:3000/api/userList/${id}`,{
            studentName: name,
            studentId: email,
            password: password,
            level: level.level,
            status: true
        })
        console.log(response)
    }
    const defaultProps = {
        options: value.data,
        getOptionLabel: (option) => option.level,
    };
    return (
        <Grid container lg='12' sm='8' md="10">
            <Paper style={paperStyle}>
                <Grid align='center' item>  
                    <h2 style={{color:'purple'}}>{props.title}</h2>
                </Grid>
                <Grid item>
                <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={login}>
                    {({props, errors, touched}) => (
                        <Form>
                            <Stack gap="1rem">

                            <Field as={TextField} label='Name' name="name"
                                    placeholder='Enter Name'  fullWidth required value={name} onChange={(e)=>{setName(e.target.value)}}
                                    helperText={<ErrorMessage name="name" />} >
                                        {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
                                    </Field>
                            <Field as={TextField} label='Email' name="email"
                                    placeholder='Enter email' fullWidth required value={email} onChange={(e)=>{setEmail(e.target.value)}}
                                    helperText={<ErrorMessage name="email" />}
                                >{errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                  ) : null}</Field>
                               
                            <Field as={TextField} label='Password' name="password"
                                    placeholder='Enter password' type='password' fullWidth required value={password} onChange={(e)=>{setPassword(e.target.value)}}
                                    helperText={<ErrorMessage name="password" />} >{errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                      ) : null}</Field>

                                    <Field as={Autocomplete} name="level"
                                        {...defaultProps}
                                        value={level}
                                        onChange={(event, newValue) => {
                                            setLevel(newValue);
                                        }}
                                        inputValue={inputvalue}
                                        onInputChange={(event, newInputValue) => {
                                            setInputvalue(newInputValue);
                                        }}
                                        id="controllable-states-demo"
                                        getOptionLabel={(option) => option && option.level}

                                        renderInput={(params) => <TextField {...params} placeholder='Level' />}
                                        fullWidth
                                    >{errors.level && touched.level ? (
                                        <div>{errors.level}</div>
                                      ) : null}</Field>
                            <Button type='submit' color='primary' variant="contained" 
                                style={btnstyle} fullWidth validationSchema={validationSchema} onClick={login} >Create User</Button>
                        </Stack>
                        </Form>
                    )}
            </Formik>
            </Grid>
        </Paper>
        </Grid >
    )
 
}

export default CreateUserForm