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
            <h2 className="green">Correct!</h2>
        </div> 
    );
}
 
export default Correct;