// Props means properties we can access an component properties using the props object

import propTypes from prop-types
function UnderstandingProps(props){
    return(

        <div>
            <h2>Name:  {props.name}</h2>
            <h2>Age:  {props.age}</h2>
            <h2>Student: {props.isStudent ? "Yes" : "No"}</h2>
        </div>

    );

}




export default UnderstandingProps