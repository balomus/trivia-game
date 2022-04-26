import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Correct = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            // console.log("timeout triggered")
            navigate('/question');
        }, 3000);
    }, [])

    return ( 
        <div>
            Correct!
        </div> 
    );
}
 
export default Correct;