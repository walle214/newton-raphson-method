import React from 'react';

interface ResultListProps {
  results: Number[];
}
const ResultList = ({ results }: ResultListProps) => {
  return (
    <ul>
      {results.map((r, i) => (
        <li key={i}>{r}</li>
      ))}
    </ul>
  );
};
export default ResultList;
