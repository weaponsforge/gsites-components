import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import { cardReceived } from '@/store/cards/cardSlice'
import forminputlabels from '../../constants/forminputlabels.json'

function FormItemsInput ({
  handleSubmit,
  card,
  disabled = false
}) {
  const formRef = useRef(null)
  const dispatch = useDispatch()

  const handlePreview = () => {
    const cardObj = forminputlabels
      .reduce((list, item) => [...list, item.id], [])
      .reduce((carditems, key) => ({ ...carditems, [key]: formRef.current[key].value }), {})

    dispatch(cardReceived({ ...cardObj, id: card?.id ?? '-' }))
  }

  return (
    <Box
      sx={{
        marginTop: (theme) => theme.spacing(3),
        '& .MuiTextField-root': {
          marginBottom: (theme) => theme.spacing(3)
        }
      }}
    >
      <form onSubmit={handleSubmit} ref={formRef}>
        {forminputlabels.map((item, index) => (
          <TextField
            key={index}
            id={item.id}
            label={item.label}
            placeholder={item.placeholder}
            disabled={disabled}
            multiline={(item.id === 'description')}
            rows={5}
            defaultValue={card?.[item.id] ?? ''}
            size="small"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
            sx={{
              width: '100%',
              marginBottom: (theme) => theme.spacing(2)
            }}
          />
        ))}

        <Divider />

        <Box
          sx={{
            float: 'right',
            marginTop: '32px',
            '& button': {
              width: '100px',
              marginLeft: '8px'
            }
          }}
        >
          <Button size="large" onClick={handlePreview}>
            Preview
          </Button>
          <Button size="large" disableElevation variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  )
}

FormItemsInput.propTypes = {
  handleSubmit: PropTypes.func,
  card: PropTypes.func,
  disabled: PropTypes.bool
}

export default FormItemsInput
