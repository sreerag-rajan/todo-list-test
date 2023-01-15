import {Box, Input, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { addTodo } from '../store/action';
import { useDispatch } from 'react-redux';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addTodo(text));
  }
  return(
    <Box display={'flex'} gap='20px' m='2rem'>
      <Input placeholder='New Task' variant='outline' value={text} onChange={(e)=>setText(e.target.value)} />
      <Button onClick={() => handleSubmit}>Add</Button> 
    </Box>  
  )
}