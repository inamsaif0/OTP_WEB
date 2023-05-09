import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import AddFiles from '../../component/AddFiles'

export default function addingFiles(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem' ml="20rem" mr="20rem">
                <AddFiles/>
                
            </Stack>
        </Layout>
    )
}