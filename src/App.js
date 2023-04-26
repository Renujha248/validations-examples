import React from 'react';
import './App.css';
import {
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import InputBox from './components/InputBox';
import DynamicAddListing from './components/DynamicAddListing';
import SideBar from './components/SideBar';
import { Header } from './components/Header';
import { TextArea } from './components/TextArea';
import SubmitButton from './components/SubmitButton';
import CheckBoxInput from './components/CheckBoxInput';
import RadioInput from './components/RadioInput';
import Dashbord from './components/Dashbord';
import SingleSelect from './components/SingleSelect';
import AxiosWithSingleSelect from './components/AxiosWithSingleSelect';
import Multiselect from './components/Multiselect';
import FormValidation from './components/FormValidation';
import ReactTableDataFetch from './components/ReactTableDataFetch';
import ForUsesForTableOf8 from './components/ForUsesForTableOf8';
import Practice from './components/Practice-react';
import Active from './components/Active';
import Homepage from './components/Homepage';
import RichTextEditor from './components/RichTextEditor';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className=''><Header /></div>

        <div className='grid grid-cols-4'>
          <div className='sidebar'><SideBar /></div>
          <div className='maincontent p-4'>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/dashbord" element={<Dashbord />} />
              <Route path="/inputbox" element={<InputBox />} />
              <Route path="/dynamicaddlisting" element={<DynamicAddListing />} />
              <Route path="/textarea" element={<TextArea />} />
              <Route path="/submitbutton" element={<SubmitButton />} />
              <Route path="/checkboxinput" element={<CheckBoxInput />} />
              <Route path="/radioinput" element={<RadioInput />} />
              <Route path="/singleselect" element={<SingleSelect />} />
              <Route path="/axiosWithSingleSelect" element={<AxiosWithSingleSelect />} />
              <Route path="/multiselect" element={<Multiselect />} />
              <Route path="/formvalidation" element={<FormValidation />} />
              <Route path="/reacttabledatafetch" element={<ReactTableDataFetch />} />
              <Route path="/tableof8" element={<ForUsesForTableOf8 />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/active" element={<Active />} />

              {/* Homepage Routings */}
                <Route path="/richtexteditor" element={<RichTextEditor />} />
              

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>

  );
}
