import React from 'react';

import Breadcrumbs from './../molecules/breadcrumbs'
import Biography from './../molecules/biography'
import Services from './../molecules/services'
import PricingTable from './../molecules/pracingTable'
import ExpAndEdu from './../molecules/experience&Education'
import Lenguage from './../molecules/lenguageSkills'
import Knowledge from './../molecules/knowledge';
import CodeSkills from './../molecules/codeSkills';
import Quotes from './../molecules/quotes';

const Resume = () => {
    return (
        <>
            <Breadcrumbs />
            <Biography />
            <Services />
            <PricingTable />
            <ExpAndEdu />
            <Lenguage />
            <Knowledge />
            <CodeSkills/>
            <Quotes/>
        </>
    )
}

export default Resume