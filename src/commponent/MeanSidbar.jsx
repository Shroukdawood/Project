import React from 'react'
import Sidbar, { SidbarItems } from "./sidbarcomponent/Sidbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function MeanSidbar() {
  return (
    <>
    <Sidbar>
        <SidbarItems icon={<FontAwesomeIcon icon={faChartArea}/>} text='Chart Page' active>
        <Link to='/chart' >Chart</Link>
        </SidbarItems>
        <SidbarItems icon={<FontAwesomeIcon icon={faUserAlt}/>} text='Login Page' >
        <Link to='/login' >Login </Link>
        </SidbarItems>
         <SidbarItems icon={<FontAwesomeIcon icon={faUser}/>} text='Register Page' >
        <Link to='/register' >Register</Link>
        </SidbarItems>
    </Sidbar>
    </>
  )
}
