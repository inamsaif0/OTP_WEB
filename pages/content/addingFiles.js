import { Grid, Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import AddFiles from '../../component/AddFiles'

export default function addingFiles(){
    return (
        <Layout>

            <Stack flexDirection={'column'} alignItems='center' justifyContent='flex-start' gap='2rem' lg="2" sm="2" md="2" sx={{width:'50%', mt:{lg:'4rem'}, ml:{lg:'15rem', md:'2rem', sm:'1rem'}}}>
            <AddFiles/>
            </Stack>
        </Layout>
    )
}