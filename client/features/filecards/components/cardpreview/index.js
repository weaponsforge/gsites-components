import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import CardPreviewComponent from './cardpreview'

import usePictureFile from '../../hooks/usepicturefile'
import useDownloadFile from '../../hooks/usedownloafile'

function CardPreview () {
  const [selectedUrl, setSelectedUrl] = useState(null)
  const card = useSelector(state => state.cards.card)

  const { pictureImage } = usePictureFile(card?.picture_url)
  const { loading } = useDownloadFile({ fileUrl: selectedUrl })

  useEffect(() => {
    if (!loading) {
      setSelectedUrl(null)
    }
  }, [loading])

  const cardSubTitle = useMemo(() => {
    let subtitle = <span>Subtitle</span>

    if (card !== null) {
      subtitle = <span>{card?.subtitle ?? ''}</span>

      if (card?.website_url !== '') {
        subtitle = <a href={card.website_url}>
          {subtitle}
        </a>
      }
    }

    return subtitle
  }, [card])

  const isDisabled = useMemo(() => {
    if (loading) {
      return true
    } else {
      return (card)
        ? (card?.download_url === '' || !card?.download_url.includes('http'))
        : true
    }
  }, [loading, card])

  const downloadFile = async () => {
    setSelectedUrl(card?.download_url)
  }

  return (
    <CardPreviewComponent
      card={card}
      loading={loading}
      pictureImage={pictureImage}
      cardSubTitle={cardSubTitle}
      isDisabled={isDisabled}
      downloadFile={downloadFile}
    />
  )
}

export default CardPreview
