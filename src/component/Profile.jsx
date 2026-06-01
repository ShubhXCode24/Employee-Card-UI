import React from 'react'

const profile = (props) => {
  return (
    <div className="cardProfile">

        <div className="top">
          <h4>{props.payment}</h4>
        </div>

        <img src={props.employeeImg} alt="" />

        <h2>{props.employeeName}</h2>
        <p className='post'>{props.employeeRole}</p>
        <p className='company'>{props.companyName}</p>

      <div className="skills">
        {props.employeeSkills.map((skill, index) => {
          return (
            <span
              key={index}
              className={skill.startsWith("+") ? "additional" : ""}
            >
              {skill}
            </span>
          );
        })}
      </div>

        <p className='details'>{props.employeeDetails}</p>

        <button>VIEW PROFILE</button>
      </div>
  )
}

export default profile