import { Grid } from '@mui/material'
import Home from './home/index'


export default function Layout({children}){
    return (
        <div>
            <Grid sx={{display:'flex', flexWrap:'wrap'}} lg="10" md="8" xl='12'  sm='4'>
            <Home />
            {   
                children
            }
            </Grid>

        </div>
    )
}