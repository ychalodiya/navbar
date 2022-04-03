import React from 'react'

const CurrentTime = ({city})  => {
    const timeZone = {
        'cupertino': 'America/Los_Angeles',
        'new-york-city': 'America/New_York',
        'sydney': 'Australia/Sydney',
        'tokyo': 'Asia/tokyo',
        'london': 'Europe/London',
	    'amsterdam': 'Europe/Amsterdam',
        'hong-kong': 'Asia/Hong_Kong'
    }
    const time = new Date().toLocaleString("en-US", {timeZone: timeZone[city]})

  return (
    <div>{time}</div>
  )
}

export default CurrentTime;