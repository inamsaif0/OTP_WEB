import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import Dashboard from '../../component/Dashboard';
import CreateUserForm from '../../component/CreateUserForm';

export default function UserList(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='flex-start' gap='2rem' lg="2" sm="2" md="2" sx={{width:'50%', mt:{lg:'4rem'}, ml:{lg:'15rem', md:'2rem', sm:'1rem'}}}>
                <CreateUserForm title="Edit User"/>
            </Stack>
        </Layout>
    )
} 