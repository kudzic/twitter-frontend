import React from 'react'

const Tweet = (props) => {
    

  return (
    <div>
        <div>
        </div>
        <div>
            <div>
                <div>{props.name}</div>
                <div>@{props.username}</div>
                <div>{props.date}</div>
            </div>
            <div>
                <div>{props.tweet}</div>
            </div>
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Tweet