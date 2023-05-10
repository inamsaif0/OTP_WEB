import { Grid, Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import CreateUserForm from '../../component/CreateUserForm';
// import CreateUserForm from '../../component/CreateUserForm';
export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center'>
                <Grid container lg='3' md='2' sm='4'>
                <Typography variant='h2' textAlign='center' fontFamily='monospace' mt='12rem'>This Is OTP Dashboard</Typography>
                </Grid>
                
            </Stack>
        </Layout>
    )
}