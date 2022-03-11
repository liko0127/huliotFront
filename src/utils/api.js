import axios from "axios";
import {API_URL} from "../env";
const fileUpload = (file, callback) => {
        let formData = new FormData();
        formData.append("image", file);
        axios.post(`${API_URL}/fileUpload`,formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((resp) => {
                callback && callback(true,resp.data);
            })
            .catch(err=>{
                callback && callback(false,err.response.data.msg);
            });

};
const exportPDF = (callback) => {
    axios({
        url: `${API_URL}/exportToPdf`, //your url
        method: 'GET',
        responseType: 'blob', // important
    }).then((response) => {
        callback(true)
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.style.display = "none";
        link.href = url;
        link.setAttribute('download', 'converted.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
    }).catch(()=>{
        callback(false)
    })
};
export {fileUpload,exportPDF}
