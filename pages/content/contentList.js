import { Stack, Typography, TextField } from '@mui/material'
import Layout from '../Layout'
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import ContentTable from '../../component/ContentTable';
import SearchIcon from '@mui/icons-material/Search';

export default function Dashboard(){
    return (
        <Layout>

            <Stack flexDirection={'column'} alignItems='centen' justifyContent='center' gap='2rem' 
            sx={{ 
             mt:{lg:'10rem', sm:'3rem', md:'2rem'},
             ml:{lg:'5rem', md:'15rem', sm:'1rem'},
             mb:{lg:'2rem', md:'1rem',sm:'1rem'},
             }}>
                            <Stack direction={'column'} alignItems='center' justifyContent='center'>
                <Stack flexDirection='row' justifyContent='space-between'  sx={{gap:{lg:'30rem', md:'20rem',sm:'20rem'}}} >
                    <TextField
                        label="Search by name"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    {/* <Button onClick={handleOpen} sx={{width:'150px',height:'50px'}}>Add New</Button> */}
                    <Button
                    
                        style={{ background: 'linear-gradient(to right top, #430089, #82ffa1)', color: '#FFFFFF', width: '150px', height: '50px' }}
                    >Add New</Button></Stack></Stack>
            <ContentTable/>
            {/* <AddFiles/> */}
            
            </Stack>
        </Layout>
    )
}