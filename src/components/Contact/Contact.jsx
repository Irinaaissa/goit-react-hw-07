
import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ item:{name, number,id}}) {
  const dispatch = useDispatch();
 
  return (
    <div className={css.contactCard}>
    <div>
      <p className={css.info}><span className={css.iconWrapper}><IoPersonSharp  /></span>{name} </p>
      <p className={css.info}><span className={css.iconWrapper}><FaPhone /></span> {number}</p>
    </div>
    <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
  Delete
</button>
    </div>
  );
}
