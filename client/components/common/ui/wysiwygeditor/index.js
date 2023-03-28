import { useRef } from 'react'
import PropTypes from 'prop-types'
import JoditEditor from 'jodit-react'

/**
 * A WYSWIG HTML editor using the jodit-react lib.
 * Import this component using NextJS 'next/dynamic' import with the SSR option set to false:
 * const WYSWIGEditor = dynamic(() => import('@/components/common/ui/wysiwygeditor'), { ssr: false })
 * @param {Function} setContentCallback - Callback method for copying the Editor's current HTML string to the calling component
 * @param {String} initialContent - Semantic HTML tags written in strings
 * @param {Bool} readonly - Set the editor to read-only mode
 */
function WYSWIGEditor ({ setContentCallback, initialContent = '', readonly = false }) {
  const editor = useRef(null)

  const setCurrentContent = (newContent) => {
    if (setContentCallback) {
      setContentCallback(newContent)
    }
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <JoditEditor
        ref={editor}
        value={initialContent}
        config={{
          readonly,
          placeholder: 'Start Typing...',
          height: '100vh'
        }}
        tabIndex={1}
        onBlur={(newContent) => setCurrentContent(newContent)}
      />
    </div>
  )
}

WYSWIGEditor.propTypes = {
  setContentCallback: PropTypes.func,
  initialContent: PropTypes.string,
  readonly: PropTypes.bool
}

export default WYSWIGEditor
