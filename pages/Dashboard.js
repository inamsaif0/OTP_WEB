import { Stack } from '@mui/material'
import Layout from './Layout'
import Table from '../component/Table'
import Button from '@mui/material/Button';

export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem'>
            <Button variant="contained" sx={{marginLeft:'50rem'}}>Add Item</Button>
                <Table/>
            </Stack>
        </Layout>
    )
}