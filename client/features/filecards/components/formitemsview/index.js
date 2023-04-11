import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'

import CardPreview from '../cardpreview'
import cardViewLabels from '../../constants/cardviewlabels.json'
import styles from './styles'

function FormItemsView ({ card }) {
  const [embedUrl, setEmbedUrl] = useState('')

  const incrementTimestamp = useCallback(() => {
    const timestamp = Math.floor((new Date()).getTime() / 1000)
    const subDirectory = (process.env.NEXT_PUBLIC_BASE_PATH !== '')
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : ''

    return (card !== null)
      ? `${window.location.origin}${subDirectory}/cards/embed?id=${card.id}&ts=${timestamp}`
      : window.location.origin
  }, [card])

  useEffect(() => {
    const embed = incrementTimestamp()
    setEmbedUrl(embed)
  }, [incrementTimestamp])

  const copyToClipboard = () => {
    const embed = incrementTimestamp()
    setEmbedUrl(embed)
    navigator.clipboard.writeText(embed)
  }

  return (
    <Grid container spacing={2} sx={styles.container}>
      {/** Card Preview */}
      <Grid item md={12} lg={3}>
        <Typography variant="h6">
          Card Preview
        </Typography>

        <CardPreview />
      </Grid>

      <Grid item md={12} lg={9}>
        {/** Title */}
        <Typography variant="h4">
          {card.title}
        </Typography>

        <Typography variant="h5">
          {card.subtitle}
        </Typography>

        {/** Information */}
        <Box sx={styles.infoContainer}>
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
                  {(card[item.key])
                    ? (card[item.key] !== '')
                      ? card[item.key]
                      : '-'
                    : '-'
                  }
                </Typography>
              </div>
            ))}

            {/** IFrame Embed URL */}
            <Typography variant='label' component="div">
              <b>IFrame Embed URL</b>
            </Typography>

            <Box sx={styles.iframeEmbedContainer}>
              <Typography variant='label'>
                <Link href={`/cards/embed?id=${card?.id}`} target="_blank">
                  {embedUrl}
                </Link>
              </Typography>

              <Button size="small" disableElevation variant='text' onClick={copyToClipboard}>
                <ContentPasteIcon sx={{ fontSize: '20px' }} />
              </Button>
            </Box>

            <Typography variant="caption">
              Press the Copy Button to copy the IFrame embed URL to clipboard
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
