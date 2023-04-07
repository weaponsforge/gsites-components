import CreateCardForm from '../../components/createcardform'

function EditCard () {
  return (
    <CreateCardForm
      dialogSettings={{
        dialogTitle: 'Update File Card',
        dialogText: 'Would you like to update this File Card?',
        dialogTextSuccess: 'File Card updated.',
        headerTitle: 'Edit File Card',
        headerSubTitle: 'Update an existing File Card'
      }}
    />
  )
}

export default EditCard
