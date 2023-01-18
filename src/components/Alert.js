import React from 'react'

export default function Alert(props) {

    const alertCaps = (alertmsg) => {
       let lowerCase = alertmsg.toLowerCase();
       return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)

    }

  return (
    props.alert && <div className="container mt-5">
        <div className="row">
            <div className="col-md-3">
                <div className={`alert alert-${props.alert.showType} alert-dismissible fade show`} role="alert">
                    <strong>{alertCaps(props.alert.showType)}:</strong> {props.alert.showMsg}
                </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
        </div>
    </div>
  )
}
