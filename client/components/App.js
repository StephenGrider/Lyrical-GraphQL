import React from 'react';

export default (props) => {
    return (
        <div className="container">
            {/* pass any props to the child components */}
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, { ...props })   
            })}
         </div>
    )
}