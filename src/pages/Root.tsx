import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import Main from './Main';
import About from './About';
import Diet from './Diet';
import Allergens from './Allergens';
import BloodTests from './BloodTests';
import Appointments from './Appointments';
import { useEffect } from 'react';
import { fetchPatients } from 'redux/patientsListSlice';
import { useAppDispatch } from 'redux/hooks';
import Login from './Login';
import Register from './Register';

const Root = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        {/* {user.login ? ( */}
        <Wrapper>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient/appointments/:id" element={<Appointments />} />
          <Route path="/patient/blood-tests/:id" element={<BloodTests />} />
          <Route path="/patient/allergens/:id" element={<Allergens />} />
          <Route path="/patient/diet/:id" element={<Diet />} />
          <Route path="/patient/about/:id" element={<About />} />
          <Route path="/" element={<Main />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Wrapper>
        {/* ) : (
            <>
              <Route path="*" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
            </>
          )} */}
      </Routes>
    </Router>
  );
};

export default Root;
