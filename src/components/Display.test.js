import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import * as rtl from '@testing-library/react';

import Display from './Display'

describe('<Display />', () => {
    it('should be render without crashing', () => {
        const paragraph = rtl.render(
            <p></p>
        )
        paragraph.debug();
    })
    
})