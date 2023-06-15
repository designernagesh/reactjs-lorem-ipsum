import { Text } from '@chakra-ui/react';

const ShowParagraphs = ({paragraphs}) => {
    return (
        paragraphs.map((text, i) => {
            return (
            <Text key={i} mb='20px'>{text}</Text>
            )
        })
    )
}

export default ShowParagraphs;