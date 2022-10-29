import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  ListItem,
  TextField,
  Typography
} from '@mui/material'
import { api, getAllHeroesFromApi } from '../../services/api'
import Card from '../../components/Card'
import CategoriesModal from './CategoriesModal'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface Iheroes {
  config: {}
  data: {
    id: string
    name: string
    powerstats: {
      intelligence: string
      strength: string
      speed: string
      durability: string
      power: string
      combat: string
    }
    biography: {
      'full-name': string
      'alter-egos': string
      aliases: []
      'place-of-birth': string
      'first-appearance': string
      publisher: string
      alignment: string
    }
    image: {
      url: string
    }
  }
}

export interface oneHeroe {
  id: string
  name: string
  powerstats: {
    intelligence: string
    strength: string
    speed: string
    durability: string
    power: string
    combat: string
  }
  biography: {
    'full-name': string
    'alter-egos': string
    aliases: [string, string, string]
    'place-of-birth': string
    'first-appearance': string
    publisher: string
    alignment: string
  }
  appearance: {
    gender: string
    race: string
    height: [string, string]
    weight: [string, string]
    'eye-color': string
    'hair-color': string
  }
  work: {
    occupation: string
    base: string
  }
  connections: {
    'group-affiliation': string
    relatives: string
  }
  image: {
    url: string
  }
}

const Home: React.FC = () => {
  const [allHeroes, setAllHeroes] = useState<Iheroes[] | null>([])
  const [oneHeroe, setOneHeroe] = useState([])
  const [isActived, setIsActived] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [group, setGroup] = useState<any[]>([
    { name: 'meu primeiro time', list: ['100'] }
  ])
  const getInput = useRef<HTMLInputElement>(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const addToGroup = (index: any, idPerson: any) => {}

  const addGroup = (group: any) => {
    setGroup(lastState => [group, ...lastState])
  }

  const getData = async () => {
    const response = await getAllHeroesFromApi(19)
    setAllHeroes(response)
  }

  const getSearchHero = async () => {
    const inputValue = getInput.current?.value
    const response = await api.get(`search/${inputValue}`)
    if (inputValue != '') {
      setIsActived(true)
      setOneHeroe(response.data.results)
    } else {
      setIsActived(false)
      getData()
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1
        }}
      >
        <input type={'text'} ref={getInput} />
        <Button onClick={() => getSearchHero()} variant="contained">
          Pesquisar
        </Button>
        <CategoriesModal
          open={open}
          handleClose={handleClose}
          addGroup={addGroup}
        />
        <Button onClick={() => handleOpen()} variant="contained">
          Criar Categoria
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4
        }}
      >
        <Box sx={{ backgroundColor: 'grey', width: 1800, height: 1500 }}>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#F3F3F3',
              width: 350
            }}
          >
            <Typography>Grupos</Typography>
          </Box>
          {group.map((g, i) => (
            <Accordion key={i} disableGutters elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{g.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {g.list.map((hero: any) => (
                  <Typography>{hero}</Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box sx={{ ml: 10 }}>
          <Grid
            spacing={{ xs: 1, md: 1 }}
            container
            columns={{ xs: 3, sm: 4, md: 13 }}
          >
            {isActived
              ? oneHeroe?.map((oneHeroes: oneHeroe) => (
                  <Grid item xs={2} sm={4} md={4} key={oneHeroes.id}>
                    <ListItem>
                      <Card
                        powerStatus={oneHeroes.powerstats}
                        name={oneHeroes.name}
                        image={oneHeroes.image.url}
                        type={oneHeroes.biography.alignment}
                      />
                    </ListItem>
                  </Grid>
                ))
              : allHeroes?.map((heroe: Iheroes) => (
                  <Grid item xs={2} sm={4} md={4} key={heroe.data.id}>
                    <ListItem>
                      <Card
                        powerStatus={heroe.data.powerstats}
                        name={heroe.data.name}
                        image={heroe.data.image.url}
                        type={heroe.data.biography.alignment}
                      />
                    </ListItem>
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Home
