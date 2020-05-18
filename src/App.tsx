import React, { Fragment, useState } from 'react';
import ChartCanvas from './components/ChartCanvas';
import { initialPoints, EXPECTED_RESULT, fix } from './configs';

import DrawnerLines from './components/DrawnerLines';
import ResultList from './components/ResultsList';

function App() {
  const [results, setResults] = useState<number[]>([]);
  const [iterationN, setIterationN] = useState(0);
  const [yDistance, setYDistance] = useState(EXPECTED_RESULT);

  const addResult = (newResult: number) => {
    // console.log(results);
    setResults([...results, fix(newResult)]);
  };

  return (
    <Fragment>
      <ChartCanvas />
      <DrawnerLines
        yDistance={yDistance}
        setYDistance={setYDistance}
        addResult={addResult}
        lastResult={results[results.length - 1]}
        initialPoint={initialPoints}
        iterationN={iterationN}
        updateIterationN={setIterationN}
      />
      <ResultList results={results} />
    </Fragment>
  );
}

export default App;
