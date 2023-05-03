import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';

export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem'>
                <Typography>Content list</Typography>
            </Stack>
        </Layout>
    )
}