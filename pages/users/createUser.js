import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import CreateUserForm from '../../component/CreateUserForm';

export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem'>
                <CreateUserForm level="Level"/>
            </Stack>
        </Layout>
    )
}