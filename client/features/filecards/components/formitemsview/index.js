import { useState, useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'

import CardPreview from '../cardpreview'
import cardViewLabels from '../../constants/cardviewlabels.json'
import styles from './styles'

import { notificationReceived } from '@/store/app/appSlice'
import { MESSAGE_SEVERITY } from '@/store/app/appSlice'

function FormItemsView ({ card }) {
  const [embedUrl, setEmbedUrl] = useState('')
  const dispatch = useDispatch()
  const collapse = useMediaQuery('(max-width:1100px)')

  const subDirectory = (process.env.NEXT_PUBLIC_BASE_PATH !== '')
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : ''

  const incrementTimestamp = useCallback(() => {
    const timestamp = Math.floor((new Date()).getTime() / 1000)

    return (card !== null)
      ? `${window.location.origin}${subDirectory}/cards/embed?id=${card.id}&ts=${timestamp}`
      : window.location.origin
  }, [card, subDirectory])

  const cardGalleryURL = useMemo(() => {
    return (card !== null)
      ? `${window.location.origin}${subDirectory}/cards/gallery?category=${card.category}`
      : window.location.origin
  }, [card, subDirectory])

  useEffect(() => {
    const embed = incrementTimestamp()
    setEmbedUrl(embed)
  }, [incrementTimestamp])

  const copyToClipboard = () => {
    const embed = incrementTimestamp()
    setEmbedUrl(embed)
    navigator.clipboard.writeText(embed)

    dispatch(notificationReceived({
      notification: 'Copied to clipboard!',
      severity: MESSAGE_SEVERITY.SUCCESS
    }))
  }

  const previewCols = useMemo(() => {
    return (!collapse) ? 4 : 6
  }, [collapse])

  const detailCols = useMemo(() => {
    return (!collapse) ? 8 : 6
  }, [collapse])

  return (
    <Grid container spacing={2} sx={styles.container}>
      {/** Card Preview */}
      <Grid item sm={12} md={previewCols} sx={{ width: 'inherit' }}>
        <Typography variant="h6">
          Card Preview
        </Typography>

        <CardPreview />
      </Grid>

      <Grid item sm={12} md={detailCols}>
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

            <Box
              sx={styles.iframeEmbedContainer}>
              <Typography variant='caption'>
                <Link href={embedUrl} target="_blank">
                  {embedUrl}
                </Link>
              </Typography>

              <Button size="small" disableElevation variant="contained" color="secondary" onClick={copyToClipboard}>
                <ContentPasteIcon sx={{ fontSize: '20px' }} />
              </Button>
            </Box>

            <Typography variant="caption">
              Press the Copy Button to copy the IFrame embed URL to clipboard
            </Typography>

            {/** Cards Gallery URL */}
            <div style={{ marginTop: '16px' }}>
              <Typography variant='label' component="div">
                <b>Cards Gallery URL</b>
              </Typography>

              <Box sx={styles.iframeEmbedContainer}>
                <Typography variant='caption' sx={{ padding: '4px' }}>
                  <Link href={cardGalleryURL} target="_blank">
                    {cardGalleryURL}
                  </Link>
                </Typography>
              </Box>
            </div>
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
