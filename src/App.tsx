import './App.scss';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import Oracle from './components/Oracle';
import { data } from './data';
import OracleCells from './components/OracleCells';

export interface OracleType {
  id: number,
    oracleNumber: number | string,
    text: string,
    link?: string,
}

export const App: React.FC = () => {
  const [ selectedOracle, setSelectedOracle ] = useState<OracleType | null>();

  const chooseOracle = (oracleFromEvent: OracleType): void => {
    setSelectedOracle(oracleFromEvent);
  }

  const onClose = () => {
    setSelectedOracle(null);
  }

  return (
    <div className="App">
      <div className="App__h">Знайди номер свого передбачення нижче і натискай!</div>
      <OracleCells onSelect={chooseOracle} />
      {selectedOracle && (
          <Routes>
            <Route
              path={`/${selectedOracle.id}`}
              element={(<Oracle onClose={onClose} oracle={selectedOracle} />)}
            />
          </Routes>
          )}
    </div>
  );
}

export default App;
