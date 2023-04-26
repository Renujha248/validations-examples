
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const RichTextEditor = () => {
    const [value, setValue] = useState('');

	const [text, setText] = useState('')
  return (
      <>
      <div>RichTextEditor</div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />

	  <CKEditor 
	  	editor={ClassicEditor}
		  date ={text}
		  onChange={(event, editor) =>{
			  const data = editor.getData()
			  setText(data)
		  }}
	  />
	  <p>
		  {text}
	  </p>
      </>
  )
}

export default RichTextEditor

