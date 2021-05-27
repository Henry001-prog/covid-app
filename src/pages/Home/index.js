import React from 'react';
import { Div } from './styles';

import Desktop from '../../Components/Desktop';
import Mobile from '../../Components/Mobile';

import useViewport from '../../resources/responsive';

export default function Home() {

    
    const { width } = useViewport();
    const breakpoint = 620;

    return(
        width > breakpoint ?
        <Div>
            <Desktop />
        </Div>

        :

        <Div>
            <Mobile />
        </Div>
    );
}