import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import Dashboard from '../../component/Dashboard';

export default function UserList(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem' width='90%' marginLeft='5rem' flexWrap='wrap'>
                <Dashboard/>
            </Stack>
        </Layout>
    )
} 