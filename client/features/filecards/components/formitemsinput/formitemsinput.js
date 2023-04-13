import PropTypes from 'prop-types'

import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'

import FileUploadSelector from '@/components/common/ui/fileuploadselector'

import forminputlabels from '../../constants/forminputlabels.json'
import MIME_TYPES_DEF from '../../constants/mimetypes.json'

import { FILE_INPUT_ID } from '../../hooks/useattachfile'
import { PICTURE_FILE_INPUT_ID } from '../../hooks/usepicturefile'

function FormItemsInputComponent ({
  handleSubmit,
  card,
  disabled = false,
  formRef,
  mimeType,
  allowedFiles,
  fileUrl,
  fileUrlLabel,
  pictureUrlLabel,
  fileObject,
  pictureImageFile,
  setFileData,
  setPictureData,
  setPictureFileURLText,
  setFileURLText,
  setMimeType,
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
            return <Autocomplete
              key={index}
              disablePortal
              id="mime_type"
              size="small"
              disabled={disabled || fileUrl === ''}
              sx={{ width: '100%' }}
              options={MIME_TYPES_DEF}
              value={mimeType}
              onChange={(e, newValue) => setMimeType(newValue)}
              getOptionLabel={(option) => option.LABEL}
              renderInput={(params) =>
                <TextField
                  {...params}
                  label="File Type"
                  placeholder={forminputlabels.find(item => item.id === 'mime_type').placeholder}
                  helperText={`Supported file types: ${allowedFiles}`}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              }
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
  mimeType: PropTypes.object,
  allowedFiles: PropTypes.string,
  fileUrl: PropTypes.string,
  fileUrlLabel: PropTypes.string,
  pictureUrlLabel: PropTypes.string,
  fileObject: PropTypes.object,
  pictureImageFile: PropTypes.object,
  setFileData: PropTypes.func,
  setPictureData: PropTypes.func,
  setPictureFileURLText: PropTypes.func,
  setFileURLText: PropTypes.func,
  setMimeType: PropTypes.func,
  handlePreview: PropTypes.func
}

export default FormItemsInputComponent
