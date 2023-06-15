import { Flex, Input, Button } from '@chakra-ui/react';

const GenerateForm = ({ submitHandler, inputValue, changeHandler }) => {
    return (
        <form onSubmit={submitHandler} style={{ margin: '0 auto 20px', maxWidth: '320px'}}>
          <Flex>            
            <Input type="number" value={ inputValue } max={10} onChange={ changeHandler } mr='10px' />
            <Button size='md' px='20px' type='submit' colorScheme='blue'>
              Generate
            </Button>
          </Flex>
        </form>
    )
}

export default GenerateForm;