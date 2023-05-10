import { Stack, Typography } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import ContentTable from '../../component/ContentTable'

export default function Dashboard(){
    return (
        <Layout>
            <Stack flexDirection={'column'} alignItems='center' justifyContent='center' gap='2rem' flexWrap='wrap' pl='5rem'>
                {/* <ContentTable/> */}
            </Stack>
        </Layout>
    )
}