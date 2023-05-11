import { Stack, Typography, Grid } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import Dashboard from '../../component/Dashboard';


export default function UserList(){
    return (
        <Layout>
            <Grid gap='2rem' sx={{float:'left', ml:{lg:'6rem'}}} lg='8' md='2' sm='2' width={'50%'}>
                <Dashboard/>
            </Grid>
        </Layout>
    )
} 