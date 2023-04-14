import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { ADAPTER_STATES } from '@/store/constants'

import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone'

import { HeaderNav } from '@/features/posts'
import { SectionComponent } from '@/features/cms'
import LoadingIndicator from '@/components/common/ui/loadingindicator'
import AlertDialog from '@/components/common/ui/alertdialog'
import FormItemsView from '../formitemsview'

import cardHeaderLabels from '../../constants/cardheaderlabels.json'

function ViewCardComponent ({
  handleControlClick,
  handleDeleteCancel,
  deleteCard,
  navigateToCards,
  localstate,
  actionTypes,
  deleteSuccess
}) {
  const card = useSelector(state => state.cards.card)
  const status = useSelector(state => state.cards.status)

  return (
    <>
      <SectionComponent>
        <HeaderNav
          title='File Card'
          subTitle='View File Card content.'
          buttonLink='/cms/filecards'
          buttonLabel='Back'
          disabled={status === ADAPTER_STATES.PENDING}
        />

        {(status === ADAPTER_STATES.IDLE && card && card !== undefined) &&
          <div>
            {cardHeaderLabels.map((item, index) => (
              <div key={index}>
                <Typography variant='label'><b>{item.label}:</b> </Typography>
                <Typography variant='label'>
                  {card[item.key]}
                </Typography>
              </div>
            ))}
          </div>
        }

        {/** Modal Dialog */}
        {(localstate.isOpenDialog) &&
          <AlertDialog
            isOpen={localstate.isOpenDialog}
            dialogTitle={localstate.dialogTitle}
            dialogText={(deleteSuccess) ? localstate.dialogSuccess : localstate.dialogMessage}
            loading={status === ADAPTER_STATES.PENDING}
            cancelCallback={() => {
              if (localstate.deleteSuccess) {
                navigateToCards()
              } else {
                handleDeleteCancel()
              }
            }}
            confirmCallback={() => {
              if (deleteSuccess) {
                navigateToCards()
              } else {
                deleteCard(card?.id ?? null)
              }
            }}
          />
        }
      </SectionComponent>

      {/** Button control group */}
      <SectionComponent>
        {(card) &&
          <ButtonGroup variant='outlined' size='large'
            sx={{
              display: 'flex',
              justifyContent: 'end',
              '& svg': {
                fontSize: '30px'
              }
            }}
          >
            <Button onClick={() => handleControlClick(actionTypes.DELETE)}>
              <DeleteForeverTwoToneIcon  />
            </Button>
            <Button onClick={() => handleControlClick(actionTypes.EDIT, card?.id ?? '')}>
              <BorderColorTwoToneIcon />
            </Button>
          </ButtonGroup>
        }

        {(status === ADAPTER_STATES.PENDING)
          ? <LoadingIndicator />
          : (card)
            ? <FormItemsView card={card} />
            : <div style={{ height: '300px' }}>
                The File Card does not exist or it may have been deleted.
            </div>
        }
      </SectionComponent>
    </>
  )
}

ViewCardComponent.propTypes = {
  handleControlClick: PropTypes.func,
  handleDeleteCancel: PropTypes.func,
  deleteCard: PropTypes.func,
  navigateToCards: PropTypes.func,
  localstate: PropTypes.object,
  actionTypes: PropTypes.object,
  deleteSuccess: PropTypes.bool
}

export default ViewCardComponent
