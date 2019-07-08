import React from 'react';
import { withRouter } from 'react-router-dom';
import Introduction from './steps/Introduction';
import FederalLawRequirements from './steps/FederalLawRequirements';
import PersonalData from './steps/PersonalData';

const ApplicationContainer = ( { match } ) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      {match.path === '/dashboard/application' && <Introduction />}
      {match.path === '/dashboard/application/federal-law-requirements' && <FederalLawRequirements/>}
      {match.path === '/dashboard/application/personal-data' && <PersonalData />}
    </div>
  );
};

export default withRouter( ApplicationContainer );