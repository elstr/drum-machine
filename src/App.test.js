import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders UI', () => {
  const { getByText } = render(<App />);
  
  const title = getByText(/Awesome drum machine/i);
  
  const bpms = getByText(/120 bpm/i);

  const kick = getByText(/Kick/i);
  const snare = getByText(/Snare/i);
  const hihat = getByText(/Hi-Hat/i);

  const addNewChannel = getByText(/Add new channel/i);
  
  expect(title).toBeInTheDocument();
  expect(bpms).toBeInTheDocument();
  expect(kick).toBeInTheDocument();
  expect(snare).toBeInTheDocument();
  expect(hihat).toBeInTheDocument();
  expect(addNewChannel).toBeInTheDocument();
  
  
});
