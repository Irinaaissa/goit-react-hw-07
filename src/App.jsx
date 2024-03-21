import { useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import { useDispatch ,useSelector} from 'react-redux'
import { fetchContacts } from './redux/contactsOps'
import Loader from './components/Loader/Loader'
// import Error from './components/Error/Error'


function App() {
  const loading = useSelector((state) => state.tasks.loading);
const dispatch= useDispatch();
useEffect(()=>{
  dispatch(fetchContacts())
},[dispatch]);
  return (
    <>
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <Loader>Loading message</Loader>}
      <SearchBox />
      <ContactList />
    </div>
    </>
  )
}

export default App