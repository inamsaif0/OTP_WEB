import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import ContentTable from '../../component/ContentTable'

export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'row'} alignItems='center' justifyContent='center' gap='2rem' pl='5rem' mt="10rem">
                <ContentTable/>
            </Stack>
        </Layout>
    )
}