import React from 'react'
import Header from '../components/common/Header'
import PersonalInfoForm from '../components/personalInfo'

const PersonalInformation = () => {
  return (
    <div className="bg-[white] overflow-hidden">
<PersonalInfoForm onBack={undefined} onSubmit={undefined}/>
    </div>
  )
}

export default PersonalInformation