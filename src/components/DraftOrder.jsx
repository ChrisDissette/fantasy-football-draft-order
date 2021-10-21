import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Logo from '../images/logo.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';



const DraftOrder = (props) => {

    const {playerList} = props

    const refreshHandler = event => {
        window.location.reload()
    }

    console.log(playerList)

    return (
        <div>
            <Box width={{xs: 350, sm: 500, md:700, lg:800}} >
                <Paper elevation={24}sx={{ minHeight:600, width: '100%', borderRadius: 3, opacity:'92%', paddingBottom:5}}>
                    <Box height='25%' display='flex' alignItems='center' justifyContent='center' px={3} pt={2} flexDirection='column' borderRadius={3}> 
                        <img src={Logo} />
                    </Box>
                    <Box px={{xs:5, sm: 7, md: 9 }} pt={3} minHeight='75%'>
                        <Typography variant='h4' textAlign='center' mb={5}>Draft Order Set <CheckIcon sx={{fontSize: 30}} color='success' /> </Typography>
                        <List>
                        {
                            playerList.map((player, i) => (
                                <ListItem sx={{borderBottom:'1px solid black'}}>
                                    <Typography variant='h6'><span style={{fontWeight:'bold'}}>Player {i+1} </span>: {player} </Typography>
                                </ListItem>
                                
                        ))
                        }
                        </List>
                        <br />
                        <Button fullWidth variant='contained' onClick={refreshHandler}>Try again!</Button>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default DraftOrder
