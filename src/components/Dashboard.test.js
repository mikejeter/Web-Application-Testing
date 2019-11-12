import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import * as rtl from '@testing-library/react';

import Dashboard from './Dashboard'

describe('Dashboard.js', () => {
    it('renders Display.js', () => {
        const display = rtl.render(<Dashboard />)
    })
    
})