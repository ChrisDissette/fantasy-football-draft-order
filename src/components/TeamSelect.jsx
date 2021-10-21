import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Logo from '../images/logo.png'
import Typography from '@mui/material/Typography';



const TeamSelect = (props) => {

    const {setSelectDisplay, setTeamTotal} = props

    const onChangeHandler = event => {
        setSelectDisplay(false)
        setTeamTotal(parseInt(event.target.value))
        
    }

    return (
            <Box minHeight={500} width={{xs: 350, sm: 500, md:700, lg:800}} >
                <Paper elevation={24} sx={{minHeight: 500, width: '100%', borderRadius: 3, opacity:'90%', pt:3}}>
                    <Box height='40%' display='flex' alignItems='center' justifyContent='center' px={3} flexDirection='column' borderRadius={3}> 
                        <img src={Logo} />
                    <Typography variant='h5'>Select Number of Teams Drafting</Typography>
                    </Box>
                    <Box height='60%' pt={3} px={3}>
                        <FormControl fullWidth >
                            <InputLabel id='select-team-number'># of Teams</InputLabel>
                            <Select labelId='select-team-number' label="# of Teams" onChange={onChangeHandler}>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Paper>
            </Box>
    )
}

export default TeamSelect
