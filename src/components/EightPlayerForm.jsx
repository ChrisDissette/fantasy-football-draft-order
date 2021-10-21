import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Logo from '../images/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';




const EightPlayerForm = (props) => {

    
    const {playerForm, setPlayerForm, setLoaded, playerList, setPlayerList, setTeamTotal, setSelectDisplay, formError, setFormError} = props



    const onChangeHandler = event => {
        setPlayerForm({
            ...playerForm,
            [event.target.name]:event.target.value    
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault()

        if (playerForm.playerOne.length === 0) {
            setFormError(true)
            return
        } 

        if (playerForm.playerTwo.length === 0) {
            setFormError(true)
            return
        } 

        if (playerForm.playerThree.length === 0) {
            setFormError(true)
            return
        } 

        if (playerForm.playerFour.length === 0) {
            setFormError(true)
            return
        }

        if (playerForm.playerFour.length === 0) {
            setFormError(true)
            return
        } 

        if (playerForm.playerFive.length === 0) {
            setFormError(true)
            return
        }

        if (playerForm.playerSix.length === 0) {
            setFormError(true)
            return
        }

        if (playerForm.playerSeven.length === 0) {
            setFormError(true)
            return
        }
        if (playerForm.playerEight.length === 0) {
            setFormError(true)
            return
        }

        const players = Object.values(playerForm)
        const filtered = players.filter(name => name.length > 0)
        const newArr = []

        let playerOne = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerOne])
        filtered.splice(playerOne, 1)
    
        let playerTwo = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerTwo])
        filtered.splice(playerTwo, 1)
    
        let playerThree = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerThree])
        filtered.splice(playerThree, 1)
    
        let playerFour = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerFour])
        filtered.splice(playerFour, 1)

        let playerFive = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerFive])
        filtered.splice(playerFive, 1)

        let filteredSix = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[filteredSix])
        filtered.splice(filteredSix, 1)

        let playerEleven = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerEleven])
        filtered.splice(playerEleven, 1)

        let playerEight = [Math.floor(Math.random() * filtered.length)]
        newArr.push(filtered[playerEight])
        filtered.splice(playerEight, 1)

        setPlayerList(newArr)
        console.log(playerList)
        setLoaded(true)
    }

    const onClickHandler = () => {
        setTeamTotal(0)
        setSelectDisplay(true)
        setFormError(false)
    }

    return (
        <Box minHeight={890} width={{xs: 350, sm: 500, md:700, lg:800}} >
            <Paper elevation={24} sx={{minHeight: 890, width: '100%', borderRadius: 3, opacity:'92%', pb:2}}>
                <Box height='25%' display='flex' alignItems='center' justifyContent='center' pt={3} flexDirection='column' borderRadius={3}> 
                    <img src={Logo} />
                    <Typography variant='h5'>Enter Player Names</Typography>
                </Box>
                <Box px={5} pt={3} minHeight='75%'>
                    <form onSubmit={onSubmitHandler} noValidate autoComplete="off">
                        <FormControl fullWidth>
                            <TextField 
                                label='Player One'
                                onChange={onChangeHandler}
                                name="playerOne"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Two'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerTwo"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Three'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerThree"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Four'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerFour"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Five'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerFive"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Six'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerSix"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Seven'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerSeven"
                                required
                                error={formError}
                            />
                            <TextField 
                                label='Player Eight'
                                sx={{marginTop:1.5}}
                                onChange={onChangeHandler}
                                name="playerEight"
                                required
                                error={formError}
                            />
                            <Button
                                variant="contained"
                                sx={{marginTop:3}}
                                size='large'
                                endIcon={<ArrowCircleUpIcon />}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </form>
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        <Button startIcon={<ArrowBackIcon />} onClick={onClickHandler} sx={{pr:4}} >Go Back</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default EightPlayerForm
