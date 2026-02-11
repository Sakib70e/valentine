import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackgroundMusic from './components/Shared/BackgroundMusic';
import TransitionWrapper from './components/Layout/TransitionWrapper';
import Landing from './components/Days/0_Landing';
import RoseDay from './components/Days/1_RoseDay';
import ProposeDay from './components/Days/2_ProposeDay';
import ChocolateDay from './components/Days/3_ChocolateDay';
import TeddyDay from './components/Days/4_TeddyDay';
import PromiseDay from './components/Days/5_PromiseDay';
import HugDay from './components/Days/6_HugDay';
import KissDay from './components/Days/7_KissDay';
import ValentineDay from './components/Days/8_Valentine';

const DayView = ({ day, onNext }) => (
  <TransitionWrapper className="flex-center" style={{ flexDirection: 'column' }}>
    <h2>Day {day}</h2>
    <p>Content coming soon...</p>
    <button onClick={onNext} style={{ marginTop: '20px' }}>Next Day</button>
  </TransitionWrapper>
);

function App() {
  const [currentDay, setCurrentDay] = useState(0); // 0 = Landing, 1-8 = Days

  const nextDay = () => {
    if (currentDay < 8) setCurrentDay(curr => curr + 1);
  };

  const renderDay = () => {
    switch (currentDay) {
      case 0: return <Landing onStart={nextDay} />;
      case 1: return <RoseDay onNext={nextDay} />;
      case 2: return <ProposeDay onNext={nextDay} />;
      case 3: return <ChocolateDay onNext={nextDay} />;
      case 4: return <TeddyDay onNext={nextDay} />;
      case 5: return <PromiseDay onNext={nextDay} />;
      case 6: return <HugDay onNext={nextDay} />;
      case 7: return <KissDay onNext={nextDay} />;
      case 8: return <ValentineDay />;
      default: return <DayView day={currentDay} onNext={nextDay} />;
    }
  };

  return (
    <div className="app-container">
      <BackgroundMusic />

      <AnimatePresence mode="wait">
        <div key={currentDay} style={{ width: '100%', height: '100%', position: 'absolute' }}>
          {renderDay()}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
