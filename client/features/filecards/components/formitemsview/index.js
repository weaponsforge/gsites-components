import { useMemo } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CardPreview from '../cardpreview'
import cardViewLabels from '../../constants/cardviewlabels.json'

function FormItemsView ({ card }) {
  const embedUrl = useMemo(() => {
    return (card !== null)
      ? `${window.location.origin}/cards/embed?id=${card.id}`
      : window.location.origin
  }, [card])

  return (
    <Grid container
      spacing={2}
      sx={{
        marginTop: (theme) => theme.spacing(3),
        '& h6': { marginBottom: '16px' }
      }}
    >
      <Grid item md={12} lg={3}>
        <Typography variant="h6">
          Card Preview
        </Typography>

        <CardPreview />
      </Grid>

      <Grid item md={12} lg={9}>
        <Typography variant="h4">
          {card.title}
        </Typography>

        <Typography variant="h5">
          {card.subtitle}
        </Typography>

        <Box sx={{ marginTop: '32px', p: { marginBottom: '16px', overflowWrap: 'break-word' } }}>
          <Typography variant="p" sx={{ marginTop: '24px' }}>
            {card.description}
          </Typography>

          <Box sx={{ marginTop: '32px', '& .itemvalues': { marginBottom: '16px' }}}>
            {cardViewLabels.map((item, index) => (
              <div key={index} className="itemvalues">
                <Typography variant='label' component="div">
                  <b>{item.label}</b>
                </Typography>

                <Typography variant='label' sx={{ overflowWrap: 'anywhere' }}>
                  {card[item.key]}
                </Typography>
              </div>
            ))}

            <Typography variant='label' component="div">
              <b>IFrame Embed URL</b>
            </Typography>

            <Typography variant='label'>
              <Link href={`/cards/embed?id=${card?.id}`} target="_blank">
                {embedUrl}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

FormItemsView.propTypes = {
  card: PropTypes.object
}

export default FormItemsView
