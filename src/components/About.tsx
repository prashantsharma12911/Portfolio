import { Box , Text , Button} from '@chakra-ui/react'
import React, { useState } from 'react'

interface Props {
    description : string,
    limit : number
}

const About = ({description , limit} : Props) => {

    const desc = description.substring(0,limit);
    const [expanded, setExpanded] = useState(false);

  return (
        <Text onClick={() => setExpanded(!expanded)}>
      {expanded ? description : desc + " ..."}{" "}
      {
        <Button size="xs" fontWeight="bold"  marginLeft={1}>
          {expanded ? "Read less" : "Read more"}
        </Button>
      }
    </Text>
  )
}

export default About
