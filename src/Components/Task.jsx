import {IconButton, Badge} from '@chakra-ui/react';
import {DeleteIcon, CheckIcon, CloseIcon} from '@chakra-ui/icons';
import { useDispatch } from 'react-redux'
import { TOGGLE_TODO } from '../store/action'

export const Task = ({Tr,Td,task, sno}) => {
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch({type: TOGGLE_TODO, payload: {id}});
  }

  const handleDelete = (id) => {
    //TODO: Make the delete work
    
  }
  return (
    <Tr>
      <Td fontFamily={'sans-serif'} color='#313131' textAlign='center' w='10%'>sno</Td>
      <Td fontFamily={'sans-serif'} color='#313131' textAlign='center' w='20%'>{task}</Td>
      <Td textAlign='center' w='30%'>{task.isComplete? <Badge p='5px 10px' borderRadius={'10px'} colorScheme={'yellow'}>PENDING</Badge> : <Badge p='5px 10px' borderRadius={'10px'} colorScheme={'green'}>COMPLETED</Badge> }</Td>
      <Td textAlign='center' w='20%'><IconButton aria-label='action' onClick={()=>handleToggle(task.id)} icon={task.isComplete? <CloseIcon/> : <CheckIcon/>}/></Td>
      <Td textAlign='center' w='20%'><IconButton aria-label='delete' icon={<DeleteIcon/>} onClick={() => handleDelete(task.id)}/></Td>
    </Tr>

  )
}