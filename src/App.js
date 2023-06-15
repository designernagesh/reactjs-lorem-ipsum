import { Container, Box, Heading } from '@chakra-ui/react';
import data from './data/data';
import { useState } from 'react';
import GenerateForm from './components/GenerateForm';
import ShowParagraphs from './components/ShowParagraphs';

function App() {
  const [ paragraphs, setParagraphs ] = useState(data.slice(0, 1));
  const [ inputValue, setInputValue ] = useState(1)

  const changeHandler = (e) => {
    setInputValue( e.target.value )
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, `${inputValue}`));
  }

  return (
    <Container maxW='5xl' mt='30px'>
      <Box boxShadow='lg' p='6' rounded='md' bg='white'>
        <Heading as='h1' fontSize='72px' mb='20px' color='#ec1839' align='center'>
          Lorem Ipsum
        </Heading>
        <Heading as='h5' fontSize='18px' mb='20px' align='center'>
          Tired of Boring Lorem Ipsum
        </Heading>

        <GenerateForm submitHandler={submitHandler} inputValue={inputValue} changeHandler={changeHandler} />
        <ShowParagraphs paragraphs={paragraphs} />        
      </Box>
    </Container>
  );
}

export default App;
