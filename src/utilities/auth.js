import axios from 'axios'

//login handler using email and password
export const loginHandler = async ({
    e, email, password, saveUserInfo, setFormData, navigate, formInitialState
}) => {
    e.preventDefault();
    try {
        const { data, status } = await axios.post('/api/auth/login', {
            email,
            password,
        });
        if(status === 200){
            saveUserInfo(data);
            setFormData(formInitialState);
            navigate('/profile');
        } 
        if(status === 201) {
            alert('Wrong credentials');
        }
    } catch (error) {
        const { status } = error.response;
        if(status === 404){
            alert('user not found');
        }
    }
}
