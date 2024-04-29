function Food() {
    let food1 = "Grapes";
    let food2 =  "Mango";

    return(
        <ul>
            <li><h2>Banana</h2></li>
            <li><h2>{food1}</h2></li>
            <li><h2>{food2.toUpperCase()}</h2></li>
        </ul>
    );
}

export default Food