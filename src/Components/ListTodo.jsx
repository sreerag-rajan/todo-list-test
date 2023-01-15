import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Task } from './Task';

export const ListTodo = () => {
  const {tasks, completedTasks, pendingTasks} = useSelector(store);

  return (
    <Box className='todo_list'>
      <TableContainer className='todo_list_container' minW='50rem'>
        <Table variant={'striped'} colorScheme={'alphaBlack'} border={'1px solid black'} p='20px' className='todo_list_table'>
          <Thead>
            <Tr>
              <Th textAlign={'center'} w='10$'>#</Th>
              <Th textAlign={'center'} w='20$'>Task</Th>
              <Th textAlign={'center'} w='30$'>Status</Th>
              <Th textAlign={'center'} w='20$'>Action</Th>
              <Th textAlign={'center'} w='20$'>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.map((el, i) => <Task key={el.id} Tr={Tr} Td={Td} task = {el} sno={1}/>)}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th textAlign={'center'} colSpan={2}> Completed Tasks: </Th>
              <Th textAlign={'center'} fontSize='1rem' bgColor={'rgb(148, 240, 127)'} color='green'>{completedTasks}</Th>
              <Th textAlign={'center'}> PendingTasks</Th>
              <Th textAlign={'center'} fontSize='1rem' bgColor={'#fefcbf'} color='#744210'>{pendingTask}</Th>
            </Tr>
          </Tfoot>

        </Table>
      </TableContainer>


    </Box>
  )
}