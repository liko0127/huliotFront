import {Box, Button} from "@mui/material";
import { useHistory } from "react-router-dom";
import LoadingIndicator from "../../components/LoadingIndicator";
import FileUpload from "../../components/file-upload/file-upload.component";
import {useEffect, useState} from "react";
import {fileUpload,exportPDF} from "../../utils/api"
import {toast} from "react-toastify";
function PdfProcessing(props) {

    const [profileImage, setProfileImage] = useState(null);
    const [fileUploaded,setFileUploaded] = useState(false);
    const [hasFileUpload,setHasFileUpload] = useState(true);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if(!hasFileUpload){
            setHasFileUpload(true);
        }
    },[hasFileUpload])
    const updateUploadedFiles = (files) =>{
       if(!files.length){
         setFileUploaded(false);
       }
       setProfileImage(files[0]);
    }
    const uploadImageFile = (event) => {
        event.preventDefault();
        setLoading(true);
        fileUpload(profileImage,(success,data)=>{
            setLoading(false);
            if(success) {
                toast.success("File successfully uploaded!");
                setFileUploaded(true);
            }
            else toast.error("Error while uploading file!");
        })
    };
    const exportToPdf = ()=>{
        setLoading(true);
        exportPDF((success)=>{
            setLoading(false);
            if(success) {
                toast.success("successfully exported as PDF!");
                setFileUploaded(true);
            }
            else toast.error("Error while export to pdf file!");
        });
    }
    const resetAll = ()=>{
        setFileUploaded(false);
        setProfileImage(null);
        setHasFileUpload(false);
    }
    return (
            <Box sx={{ textAlign: "center", mt: "2%" }}>
                {loading && <LoadingIndicator />}
                <Box sx={{p:2}}>
                    <form>
                        {hasFileUpload && (<FileUpload
                            accept=".jpg,.png,.jpeg"
                            updateFilesCb={updateUploadedFiles}
                        />)}
                        {!fileUploaded && !!profileImage && (<Button variant="outlined" onClick={uploadImageFile} sx={{mx:2}}>Upload File</Button>)}
                        {fileUploaded && (<Button variant="outlined" sx={{mx:2}} onClick={exportToPdf}>Export to pdf</Button>)}
                        {fileUploaded && (<Button variant="outlined" sx={{mx:2}} onClick={resetAll}>Reset</Button>)}
                    </form>
                </Box>

            </Box>

    );
}
export { PdfProcessing };
