import img from "./assets/1.jpg"

function Card() {


    return(
        <div className="Card">
        <img className="LogoImage" src={img} alt="Logo Image" />
        <h2>The Resource Bridge</h2>
        <p>We Offer RPO services at cheap price across Europe </p>
    
    </div>
    );



}


export default Card;