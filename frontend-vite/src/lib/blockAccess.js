import { useNavigate } from "react-router-dom";

const blockAccess = (localItem) => {
    const navigate = useNavigate()

    if (typeof window !== 'undefined') {
        const item = JSON.parse(localStorage.getItem(localItem) || '{}');
        if (item.role !== localItem) {
            localStorage.clear();
            navigate('/');
        }
    }
};

export default blockAccess
