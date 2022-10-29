import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField } from 'material-ui'

interface IGroups {
  open: boolean
  handleClose: () => void
  addGroup: Function
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 300,
  bgcolor: 'background.paper',
  borderRadius: 8,
  boxShadow: 24,
  p: 4
}

const GroupModal: React.FC<IGroups> = ({ open, handleClose, addGroup }) => {
  const getInput = React.useRef<HTMLInputElement>(null)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            nome da playlist
          </Typography>
          <input ref={getInput} />
          <Button
            onClick={() =>
              addGroup({ name: getInput.current?.value, list: [] })
            }
          >
            Criar Grupo
          </Button>
        </Box>
      </Modal>
    </div>
  )
}
export default GroupModal
