import CreateCardForm from '../../components/createcardform'

function CreateCard () {
  return (
    <CreateCardForm
      dialogSettings={{
        dialogTitle: 'Create a New File Card',
        dialogText: 'Would you like to create a new File Card?',
        dialogTextSuccess: 'New File Card created.',
        headerTitle: 'Create File Card',
        headerSubTitle: 'Create a new File Card here.'
      }}
    />
  )
}

export default CreateCard
