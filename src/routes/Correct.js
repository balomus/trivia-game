import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Correct = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
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