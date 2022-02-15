import react, { useState } from "react";
import {v4 as uuid} from "uuid"

const useFileDowloader = () => {
    const [files,setFiles] = useState(()=>[]);

    const download = file => setFiles( fileList=> [...fileList, {...file,downloadId: uuid}])
    return [];

}