import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Iprops {
  image: string
  name?: string
  type: string
}

const typePerson = (a: any) => {
  if (a == 'good') {
    return '#60D660'
  } else {
    return '#D66460'
  }
}

const Card: React.FC<Iprops> = ({ image, name, type }) => {
  return (
    <Box sx={{ p: 1, backgroundColor: '#9c9c9c88', borderRadius: 5 }}>
      <img
        style={{
          width: '150px',
          height: '150px',
          borderRadius: 10
        }}
        src={image}
      />

      <Typography>{name}</Typography>
      <Box
        sx={{
          backgroundColor: typePerson(type),
          borderRadius: 10,

          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Typography variant="subtitle1">{type}</Typography>
      </Box>
    </Box>
  )
}

export default Card
