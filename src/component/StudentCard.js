const StudentCard = (props) => {
    const {firstname, lastname, school, section, age} = props
    return ( 
        <div>
            <div className="student-image">
            <img src = "https://via.placeholder.com/150" alt="" />
            </div>
            <div className="student-info">
                <h3> {firstname} {lastname}</h3>
                <p> {school} </p>
                <p> {section} class</p>
                <p> {age} </p>
            </div>
        </div>
     );
}
 
export default StudentCard;