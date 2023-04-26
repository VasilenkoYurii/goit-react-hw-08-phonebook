import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <Section title="Phonebook">
//         <ContactForm />
//       </Section>

//       <Section title="Contacts">
//         <Filter />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactsList />
//       </Section>
//     </>
//   );
// }
