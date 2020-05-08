import React from 'react';

export interface ResultListProps {
  results: Number[];
}
export const ResultList = ({ results }: ResultListProps) => {
  return (
    <ul>
      {results.map((r) => (
        <li>r</li>
      ))}
    </ul>
  );
};
