import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Home from "./components/Home";
import MultiStepForm from "./components/MultiStepForm";
import Accordian from "./components/Accordian";
import Accordians from "./components/Accordians";

const App = () => {
  return (
    <BrowserRouter>
      {/* <ProgressBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/accordians" element={<Accordians />} />
        {/* <Route index element={<Step2 />} /> */}
        {/* <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} /> */}
        <Route element={<MultiStepForm />}>
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
