import React from 'react';  
import AttendeesCounter from './AttendeesConunter';

function SummitAttendees(){
  const attendees_Data = [
    {
      label: "Pre-Qualified Delegates",
      toCount: 300,
    },
    {
      label: "Leading Organisations",
      toCount: 100,
    },
    {
      label: "Industry Speakers",
      toCount: 30,
    },
    {
      label: "Sponsors & Partners",
      toCount: 40,
    },
  ];

  return (
    <div className="row align-items-center">
      <div className="section-title text-center mb-50">
        <h2 className="title">
          Atten<span>dees & Indus</span>tries
        </h2>
      </div>
      {attendees_Data.map((attend, index) => (
        <div key={index} className="col-xl-3 col-md-4 col-sm-6">
          <AttendeesCounter key={index} index={index} label={attend.label} countTo={attend.toCount} duration={1000} />
        </div>
      ))}
    </div>
  );
}

export default SummitAttendees;
