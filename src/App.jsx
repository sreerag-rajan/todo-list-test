import './App.css'
import {Box, Heading} from '@chakra-ui/react'
import { AddTodo } from './Components/AddTodo'
import { ListTodo } from './Components/ListTodo'


function App() {

  return (
    <Box className="App" w='1280px' margin={'auto'} display='flex' flexDirection='column' justifyContent='center' alignItems={'center'} >
      <Heading className='main_heading' fontFamily={'fantasy'} textAlign={'center'} as='h1' size='3xl' m='2rem auto 1rem'>To Do List</Heading>
      
      <AddTodo/>

      <ListTodo/>
      
    </Box>
  )
}

export default App
