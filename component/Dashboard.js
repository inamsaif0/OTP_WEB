import { useState } from 'react';
import { Stack } from '@mui/material'
import Layout from '../pages/Layout'
import Table from './Table'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CreateUserForm from './CreateUserForm';
import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from "@material-ui/icons/Search";

const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Layout>
            <Stack direction={'column'} alignItems='center' justifyContent='center'>
                <Stack flexDirection='row' justifyContent='space-between' gap='30rem' mb='2rem'>
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
                    <Button variant="contained" onClick={handleOpen} sx={{width:'150px',height:'50px'}}>Add New</Button>
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreateUserForm />
                        <Button variant="contained" onClick={handleClose}>Close</Button>

                    </Box>
                </Modal>
                </Stack>

                <Stack>
                    <Table />
                </Stack>
                
            </Stack>
        </Layout>
    )
}