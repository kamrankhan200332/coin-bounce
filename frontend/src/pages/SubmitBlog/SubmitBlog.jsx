// import React, { useState } from "react";
// import { submitBlog } from "../../api/internal";
// import { useSelector } from "react-redux";
// import TextInput from "../../components/Textinput/Textinput";
// import { useNavigate } from "react-router-dom";

// const SubmitBlog = () => {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [photo, setPhoto] = useState("");

//   const author = useSelector((state) => state.user._id);

//   const getPhoto = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPhoto(reader.result);
//     };
//   };

//   const submitHandler = async () => {
//     const data = {
//       author,
//       title,
//       content,
//       photo,
//     };

//     const response = await submitBlog(data);

//     if (response.status === 201) {
//       navigate("/");
//     }
//   };
//   return (
//     <div>
//       <div className="my-0 mx-auto w-[80vw] flex items-center justify-center flex-col">
//         <div
//           className={`w-inherit text-[48px] font-bold items-center my-[15px] mx-0`}
//         >
//           Create a blog!
//         </div>
//         <TextInput
//           type="text"
//           name="title"
//           placeholder="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           style={{ width: "60%" }}
//         />
//         <textarea
//           className="py-[18px] px-[30px] m-[15px] w-[60%] outline-none rounded-[10px] border border-[#fff] text-[20px] min-h-[200px]"
//           placeholder="your content goes here..."
//           maxLength={400}
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <div className="flex text-[20px] justify-center gap-[50px] w-[60%] items-center">
//           <p>Choose a photo</p>
//           <input
//             type="file"
//             name="photo"
//             id="photo"
//             accept="image/jpg, image/jpeg, image/png"
//             onChange={getPhoto}
//           />
//           {/* {photo !== '' ? <img src={photo} height={150} width={150} /> : ''} */}
//           {photo && <img src={photo} height={150} width={150} alt="Preview" />}
//         </div>

//         <button
//           className="bg-[#3861fb] text-[#fff] border-none outline-none w-[30%] rounded-[10px] py-[15px] px-[30px] font-bold cursor-pointer m-[20px] hover:bg-[#829dff] disabled:bg-[#829dff]"
//           onClick={submitHandler}
//           disabled={title === "" || content === "" || photo === ""}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubmitBlog;








import React, { useState } from "react";
import { submitBlog } from "../../api/internal";
import { useSelector } from "react-redux";
import TextInput from "../../components/Textinput/Textinput";
import { useNavigate } from "react-router-dom";

const SubmitBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");

  const author = useSelector((state) => state.user._id);

  const getPhoto = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload a valid image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const submitHandler = async () => {
    const data = {
      author,
      title,
      content,
      photo,
    };

    try {
      const response = await submitBlog(data);
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Failed to submit blog. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <div className="my-0 mx-auto w-[80vw] flex items-center justify-center flex-col">
        <div className="w-full text-[48px] font-bold items-center my-[15px] mx-0">
          Create a blog!
        </div>
        <TextInput
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "60%" }}
        />
        <textarea
          className="py-[18px] px-[30px] m-[15px] w-[60%] outline-none rounded-[10px] border border-[#fff] text-[20px] min-h-[200px]"
          placeholder="Your content goes here..."
          maxLength={400}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex text-[20px] justify-center gap-[50px] w-[60%] items-center">
          <label htmlFor="photo">Choose a photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/jpg, image/jpeg, image/png"
            onChange={getPhoto}
          />
          {photo && <img src={photo} height={150} width={150} alt="Preview" />}
        </div>
        <button
          className="bg-[#3861fb] text-[#fff] border-none outline-none w-[30%] rounded-[10px] py-[15px] px-[30px] font-bold cursor-pointer m-[20px] hover:bg-[#829dff] disabled:bg-[#829dff]"
          onClick={submitHandler}
          disabled={!title || !content || !photo}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitBlog;
