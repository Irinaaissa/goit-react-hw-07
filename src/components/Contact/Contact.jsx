
import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact}) {
  const dispatch = useDispatch();
 
  // const {  name, number } = contact;

  // function handleClick() {
    // dispatch(deleteContact(id));
  // }

  return (
    <div className={css.contactCard}>
    <ul className={css.contactList}>
    <li className={css.contactItem}>
      <div>
        <ContactInfo icon={<IoPersonSharp />}>{}</ContactInfo>
        <ContactInfo icon={<FaPhone />}>{}</ContactInfo>
      </div>
    </li>
    </ul>
    <button className={css.btn} onClick={() => dispatch(deleteContact(contact.id))}>
  Delete
</button>
    </div>
  );
}

function ContactInfo({ icon, children }) {
  return (
    <p className={css.info}>
      <span className={css.iconWrapper}>{icon}</span>
      <span>{children}</span>
    </p>
  );
}