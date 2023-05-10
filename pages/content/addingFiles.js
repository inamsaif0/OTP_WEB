import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import AddFiles from '../../component/AddFiles'

export default function addingFiles(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem' mr="20rem" m="5rem">
                <AddFiles/>
                
            </Stack>
        </Layout>
    )
}