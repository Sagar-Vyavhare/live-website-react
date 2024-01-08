import React, { useState } from "react";
import "./FileReader.scss";
import {useTitle} from "../../hooks/Hooks";

const fileObj = {
  data: null,
  name:null
}

export default function FileReaderP() {
  let fileReader;
  let targetFile;
  const [file, setFile] = useState(fileObj);
  useTitle("File Reader")

  

  const handleFileRead = (e) => {
    setFile({
      ...file,
      data: fileReader.result,
      name:targetFile.name
    })
  };

  const handleFileChosen = (e) => {
    targetFile = e.target.files[0];
    fileReader = new FileReader();
    fileReader.readAsText(targetFile);
    fileReader.onloadend = handleFileRead;
  };

  return (
    <div className="file-reader">
      <div className="input">
        <input type="file" onChange={(e) => handleFileChosen(e)} id="file" />
        <label htmlFor="file">choose file</label>
      </div>
      <div className="content">
        <span>{file.name ? file.name : "no file selected"}</span>
        <pre>{file.data ? file.data : <div className='not-select-file'>please select file</div>}</pre>
      </div>
    </div>
  );
}
