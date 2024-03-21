
import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const { id, name, number } = item;

  function handleClick() {
    dispatch(deleteContact(id));
  }

  return (
    <div className={css.contactCard}>
    <ul className={css.contactList}>
    <li className={css.contactItem}>
      <div>
        <ContactInfo icon={<IoPersonSharp />}>{name}</ContactInfo>
        <ContactInfo icon={<FaPhone />}>{number}</ContactInfo>
      </div>
    </li>
    </ul>
    <button className={css.btn} onClick={handleClick}>
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