import React from 'react'

export default function Alert(props) {

    const captalized =(word)=>{
       let lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1)
    }


  return (
    props.alert &&  <div class={`alert alert-${props.alert.type} fade-out`}  role="alert">
 <strong>{captalized(props.alert.type)}: {props.alert.msg}</strong>
</div>
  )
}
