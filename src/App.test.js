import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';

afterEach(rtl.cleanup)

it('renders without crashing', () => {
  const header= rtl.render(
    <h1>Board</h1>
    // <button>Strike</button>
  )
  const element = header.queryByText(/board/i)
});