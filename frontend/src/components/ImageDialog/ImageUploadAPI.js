import useAxios from "../../utils/useAxios";

export async function createImageEntry(api, data) {

    const response = await api.post("/upload/",JSON.stringify({
        data:data
    })).then((res)=>{
        return res;
    }).catch((error)=>{
        return error.response;
    });
    if (response.status===201){
        window.location.href = `/mymodels/${response.data.id}`;
    }
    return response;

}
