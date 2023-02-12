import { useNavigate } from "react-router-dom";

const logout = (localItem) => {
    const navigate = useNavigate()
    localStorage.removeItem(localItem);
    localStorage.removeItem('token');
    navigate('/');
};

export default logout
