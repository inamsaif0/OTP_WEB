import { Stack, Typography, Grid } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import CreateUserForm from '../../component/CreateUserForm';

export default function Dashboard(){
    return (
        <Layout>
            
                
        
            <Stack flexDirection={'column'} alignItems='center' justifyContent='flex-start' gap='2rem' lg="2" sm="2" md="2" sx={{width:'50%', mt:{lg:'4rem',md:'2rem',sm:'4rem'}, ml:{lg:'15rem', md:'2rem', sm:'1rem'}}}>
            <CreateUserForm level="Level" value="Create User"/>
            </Stack>
        </Layout>

    )
}