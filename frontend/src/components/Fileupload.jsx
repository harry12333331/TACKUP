import React, { useState } from "react";

export function FileUpload() {
  const [files, setFiles] = useState([]);
  const handleupload=async()=>{
    if(files.length==0){
        alert('Upload files')

    }
  }
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">Upload Your Resources</h2>
      
      <input
        type="file"
        multiple
        accept=".pdf,.txt,.docx"
        onChange={(e)=>{const selectedfiles=Array.from(e.target.files);setFiles(selectedfiles)}}
        className="block w-full mb-4 border border-gray-300 p-2 rounded"/>
      {files.length > 0 && (<ul className="mb-4">{files.map((file, index) => (<li key={index} className="text-gray-700">{file.name} ({(file.size / 1024).toFixed(2)} KB)</li>
          ))}
        </ul>
      )}
      <button onClick={handleupload} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Upload
      </button>

    </div>

    )



}