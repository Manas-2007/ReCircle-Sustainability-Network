import React, { useState } from 'react';
import HomeDash from './homepage/HomeDash'; 
import FinalUI from './HouseKeeper/FinalUI';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <FinalUI />;
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      
      <HomeDash onLogin={() => setIsLoggedIn(true)} />
      
    </div>
  );
};

export default App;