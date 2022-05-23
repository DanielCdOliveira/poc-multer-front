import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
export default function App() {
  const [file, setFile] = useState("");

  // no multer
  // function uploadImage(e) {
  //   e.preventDefault();
  //   console.log(file);
  // }

  // multer
  function uploadImage(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    console.log(data);
   
    // axios.post("https://httpbin.org/anything",data).then(e=>console.log(e)).catch(e=>console.log(e))
    const promise = axios.post("http://localhost:5001/upload", data);
    promise.then((e) => {
      console.log(e);
    });
    promise.catch((e) => {
      console.log(e);
    });
  }
  return (
    <Main>
      <h1>FAÇA UPLOAD DA SUA IMAGEM</h1>
      <form onSubmit={uploadImage} encType="multipart/form-data">
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Salvar</button>
      </form>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
