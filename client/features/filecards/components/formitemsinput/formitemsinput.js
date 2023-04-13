import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import FileUploadSelector from '@/components/common/ui/fileuploadselector'

import forminputlabels from '../../constants/forminputlabels.json'
import { FILE_INPUT_ID } from '../../hooks/useattachfile'
import { PICTURE_FILE_INPUT_ID } from '../../hooks/usepicturefile'

function FormItemsInputComponent ({
  handleSubmit,
  card,
  disabled = false,
  formRef,
  mimeType,
  fileUrlLabel,
  pictureUrlLabel,
  fileObject,
  pictureImageFile,
  setFileData,
  setPictureData,
  setPictureFileURLText,
  setFileURLText,
  handlePreview
}) {
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
        {forminputlabels.map((item, index) => {
          switch (item.id) {
          case 'picture_url':
            return <TextField
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              disabled={disabled}
              rows={5}
              onChange={setPictureFileURLText}
              value={pictureUrlLabel}
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment:
                  <FileUploadSelector
                    file={pictureImageFile}
                    fileSelectedCallback={setPictureData}
                    inputDomID={PICTURE_FILE_INPUT_ID}
                    acceptFiles='.jpg, .jpeg, .png, image/*'
                  />
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />
          case 'download_url':
            return <TextField
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              disabled={disabled}
              rows={5}
              onChange={setFileURLText}
              value={fileUrlLabel}
              size="small"
              variant="outlined"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                endAdornment:
                  <FileUploadSelector
                    file={fileObject}
                    fileSelectedCallback={setFileData}
                    inputDomID={FILE_INPUT_ID}
                    acceptFiles='*.*'
                  />
              }}
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />
          case 'mime_type':
            return <TextField
              key={index}
              id={item.id}
              label={item.label}
              placeholder={item.placeholder}
              disabled
              rows={5}
              value={mimeType ?? ''}
              size="small"
              variant="outlined"
              sx={{
                width: '100%',
                marginBottom: (theme) => theme.spacing(2)
              }}
            />
          default:
            return <TextField
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
          }
        })}

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

FormItemsInputComponent.propTypes = {
  handleSubmit: PropTypes.func,
  card: PropTypes.object,
  disabled: PropTypes.bool,
  formRef: PropTypes.object,
  mimeType: PropTypes.string,
  fileUrlLabel: PropTypes.string,
  pictureUrlLabel: PropTypes.string,
  fileObject: PropTypes.object,
  pictureImageFile: PropTypes.object,
  setFileData: PropTypes.func,
  setPictureData: PropTypes.func,
  setPictureFileURLText: PropTypes.func,
  setFileURLText: PropTypes.func,
  handlePreview: PropTypes.func
}

export default FormItemsInputComponent
