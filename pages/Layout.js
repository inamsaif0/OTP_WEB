import { Grid } from '@mui/material'
import Home from './home/index'


export default function Layout({children}){
    return (
        <div>
            <Grid sx={{display:'flex', flexWrap:'wrap'}} lg="3" md="2" xl='4' sm='2'>
            <Home />
            {   
                children
            }
            </Grid>

        </div>
    )
}