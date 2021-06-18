import {useState} from 'react';
import './App.css';
import FormButton from './components/FormButton';
import FormLabel from './components/FormLabel';
import FormTextInput from './components/FormTextInput';
import FormValidationMessage from './components/FormValidationMessage';

function App() {

  const initialState = {
    first_name:'Priyanka',
    last_name:'',
    email_address:'',
    isSubmitting: false,
  }

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);

  const { first_name, last_name, email_address, isSubmitting } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    setFormData({
      ...formData,
      isSubmitting: true,
    })
    setTimeout(() => {
      let error = validateForm();
      if(error) {
        setFormError(error);
        console.log('form validation failed, hence did not submitted');
        setFormData({
          ...formData,
          isSubmitting: false,
        })
        return;
      }
    }, 3000);
    console.log('Form Submitted');

    setTimeout(() => {
      //this is for submission of backend
      setFormData({
        ...formData,
        isSubmitting: false,
      })
      console.log('Got response from backend.')
    }, 2000)
    console.log('form validation successful, Submit to backend')
  }

  const validateForm = () => {
    let error = false;
    if(first_name === '') {
      error = {
        field_id: 'first_name',
        message: 'First name is required',
      }
      return error;
    };

    if(last_name === '') {
      error = {
        field_id: 'last_name',
        message: 'Last name is required',
      }
      return error;
    };

    if(email_address === '') {
      error = {
        field_id: 'email_address',
        message: 'Email Address is required',
      }
      return error;
    };

    return error;
  }

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <FormLabel htmlFor='first_name'>First Name </FormLabel>
        <FormTextInput id='first_name' onChange = {onChange} value= {first_name} name='first_name' disabled={isSubmitting}/>
        {formError && formError.field_id === 'first_name' ? <FormValidationMessage>{formError.message}</FormValidationMessage> : null}

        <FormLabel htmlFor='last_name'>Last Name</FormLabel>
        <FormTextInput id='last_name' value= {last_name} onChange={onChange} name='last_name' disabled={isSubmitting}/>
        {formError && formError.field_id === 'last_name' ? <FormValidationMessage>{formError.message}</FormValidationMessage> : null}

        <FormLabel htmlFor='email_address'>Email Address</FormLabel>
        <FormTextInput id='email_address' onChange={onChange} value= {email_address} name='email_address' disabled={isSubmitting}/>
        {formError && formError.field_id === 'email_address' ? <FormValidationMessage>{formError.message}</FormValidationMessage> : null}

        <FormButton primary disabled={isSubmitting}>Register</FormButton>
      </form>
    </div>
  );
}

export default App;
