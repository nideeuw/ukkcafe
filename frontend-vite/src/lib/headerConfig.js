const headerConfig = () => {
    const token = localStorage.getItem('token');

    if (token) {
        return {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        };
    } else {
        return {};
    }
};

export default headerConfig
