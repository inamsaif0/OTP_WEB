import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Stack } from '@mui/material'
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
    const [age, setAge] = React.useState('');
    const [error, setError]= React.useState(false);

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
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    //FUNCTION TO LOGIN
    const onSubmit = (values, props) => {
        console.log(age)
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    const login = async () => {
        const response = await axios.post('http://localhost:3000/api/userList',{
            studentName:initialValues.name,
            studentId:initialValues.email,
            level:initialValues.level,
            status: true
        })
        console.log(response)
        if(response.data.success) {
            console.log(response)
            router.replace('/users/userList')
        } 
        else setError(true) 
    }

    useEffect(()=>{
        router.prefetch('/users/userList')
    },[])
    return (
        <Grid container lg='12' sm='8' md="10">
            <Paper style={paperStyle}>
                <Grid align='center' item>

                    <h2>Creat User</h2>
                </Grid>
                <Grid item>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Stack gap="1rem">

                            <Field as={TextField} label='Name' name="name"
                                    placeholder='Enter Name' type='name' fullWidth required
                                    helperText={<ErrorMessage name="name" />} />
                                <Field as={TextField} label='Email' name="email"
                                    placeholder='Enter email' fullWidth required
                                    helperText={<ErrorMessage name="email" />}
                                />
                               
                                <Field as={TextField} label='Password' name="password"
                                    placeholder='Enter password' type='password' fullWidth required
                                    helperText={<ErrorMessage name="password" />} />

                                <Field as={Select} id="select" label="Age" name='level' >
                                    <MenuItem value='beg1'>beg1</MenuItem>
                                    <MenuItem value='beg2'>beg2</MenuItem>
                                    <MenuItem value='beg3'>beg3</MenuItem>
                                    <MenuItem value='inter1'>inter1</MenuItem>
                                    <MenuItem value='inter2'>inter2</MenuItem>
                                    <MenuItem value='inter3'>inter3</MenuItem>
                                    <MenuItem value='advance'>advanced</MenuItem>
                                </Field>
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth onClick={login}>{props.isSubmitting ? "Loading" : "Create User"}</Button>
                        </Stack>
                        </Form>
                    )}
            </Formik>
            </Grid>
        </Paper>
        </Grid >
    )
    // const [name, setName] = React.useState();
    // const [email, setEmail] = React.useState();
    // const [password, setPassword] = React.useState();
    // const [level, setLevel] =  React.useState();
    // //STYLING
    // const paperStyle = { padding: 20, height: 'auto', width: 400, margin: "0 auto", marginTop:'5rem', borderRadius:'15px 15px 15px 15px', mr:'6rem' }
    // const avatarStyle = { backgroundColor: '#1bbd7e' }
    // const btnstyle = { margin: '8px 0',background:'linear-gradient(to right bottom, #430089, #82ffa1)', color:'#FFFF' }
    // //STATE
    // const initialValues = {
    //     name:'',
    //     email:'',
    //     password:'',
    //     level:'',

    // }
    // //VALIDATION 
    // const validationSchema = Yup.object().shape({
    //     name: Yup.string().email('please enter name').required("Required"),
    //     email:Yup.string().email('please enter email').required('Required'),
    //     password: Yup.string().required("Required").required('Required')
    // })
    // //FUNCTION TO LOGIN
    // const onSubmit = (values, props) => {

    //     console.log(values)
    //     setTimeout(() => {
    //         props.resetForm()
    //         props.setSubmitting(false)
    //     }, 2000)

    // }
    // return (
    //     <Grid sm='1' lg='2' sx={{display:'flex', pr:'5rem', pl:'5rem', mb:'3rem'}}>
    //         <Paper style={paperStyle}>
    //             <Grid align='center'>

    //                 <h4>{props.value}</h4>
    //             </Grid>
    //             <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    //                 {(props) => (
    //                     <Form action='../api/login' method='post' >
    //                         <Stack gap='1rem'>
    //                         <Field as={TextField} label='Name ' name="name"
    //                             placeholder='Enter Name' fullWidth required
    //                             helperText={<ErrorMessage name="name" />}
    //                             // onChange={(e)=>{setName(e.target.value)}}
    //                         />
    //                         <Field as={TextField} label='Email' name="email"
    //                             placeholder='Enter Email' type='email' fullWidth required
    //                             helperText={<ErrorMessage name="email" />}
    //                             // onChange={(e)=>{setEmail(e.target.value)}}
    //                            />

    //                         <Field as={TextField} label='Password' name="password"
    //                             placeholder='Enter password' type='password' fullWidth
    //                             helperText={<ErrorMessage name="password" />}
    //                             // onChange={(e)=>{setPassword(e.target.value)}}
    //                             value="inam1234"
    //                        />

    //                         <Select level="Level" label="Level" 
    //                         // onChange={(e)=>{setLevel(e.target.value)}}
    //                         />
    //                         <Button type='submit' disabled={props.isSubmitting}
    //                             style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Create User"}</Button>

    //                         </Stack>

    //                         {/* <Field as={TextField} label='Name ' name="Name"
    //                             placeholder='Enter Name' fullWidth required
    //                             helperText={<ErrorMessage name="Name" />}
    //                         />
    //                         <Field as={TextField} label='Email' name="Email"
    //                             placeholder='Enter Email' type='email' fullWidth required
    //                             helperText={<ErrorMessage name="email" />} />

    //                         <Field as={TextField} label='Password' name="password"
    //                             placeholder='Enter password' type='password' fullWidth required
    //                             helperText={<ErrorMessage name="password" />} />

    //                         <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
    //                             style={btnstyle} fullWidth href="../dashboard">{props.isSubmitting ? "Loading" : "Log in"}</Button> */}
    //                     </Form>
    //                 )}
    //             </Formik>
    //         </Paper>
    //     </Grid>
    // )
}

export default CreateUserForm