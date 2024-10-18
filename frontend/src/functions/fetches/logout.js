
//* der cookie (cookies.token) wird gelöscht
//* dadurch wird der user ausgeloggt
//* mit useNavigate wird der user zurück zur home geleitet
export const logout = async()=>{

    try{
        fetch(import.meta.env.VITE_BACKEND_URL + "/user/logout", {credentials:'include', withCredentials:true})

    }catch(error){
        console.error(error);
    }
}