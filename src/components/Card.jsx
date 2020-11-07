import React from "react";

function Card(props) {
    const [show,setShow] = useState(false);
    handleClick = e => {
        if(props.show)
        setShow(!show)
    };
    const style1 = {
        background: 'blue',
        transform: `rotateY(${!show?0:180}deg)`
    }
    const style2 = {
        background: 'red',
        transform: `rotateY(${show?0:180}deg)`
    }
    return (
        <div class="container" onClick={handleClick}>
        <div className="flip" style ={style1}></div>
        <div className="flip" style ={style2}>1</div>
        </div>
    );
}

export default Card;