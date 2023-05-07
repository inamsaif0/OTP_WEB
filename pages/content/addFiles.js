import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import AddFilesSource from '../../component/AddFilesSource'

export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem' ml="20rem" mr="20rem">
                <AddFilesSource/>
            </Stack>
        </Layout>
    )
}