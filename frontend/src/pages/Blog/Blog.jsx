// import React, { useState, useEffect } from "react";
// import Loader from "../../components/Loader/Loader";
// import { getAllBlogs } from "../../api/internal";
// import { useNavigate } from "react-router-dom";

// const Blog = () => {
//   const navigate = useNavigate();

//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     (async function getAllBlogsApiCall() {
//       const response = await getAllBlogs();

//       if (response.status === 200) {
//         setBlogs(response.data.blogs);
//       }
//     })();

//     setBlogs([]);
//   }, []);

//   if (blogs.length === 0) {
//     return <Loader text="blogs" />;
//   }
//   return (
//     <div className="my-[50px] mx-0 flex flex-col gap-[50px] flex-wrap items-center">
//       {blogs.map((blog) => (
//         <div
//           id={blog._id}
//           className="bg-black border border-[#fff] rounded-[10px] w-[80%] p-[16px] my-[40px] mx-[20px] cursor-pointer flex flex-col items-center justify-center"
//           onClick={() => navigate(`/blog/${blog._id}`)}
//         >
//           <h1 className="text-left my-[15px] mx-0 bg-transparent text-[#fff] hover:text-[#3861fb]">
//             {blog.title}
//           </h1>
//           <img
//             src={blog.photo}
//             alt="blogImage"
//             className="w-[400px] h-[400px] rounded-[10px]"
//           />
//           <p className="mt-[20px] font-bold">{blog.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;

import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { getAllBlogs } from "../../api/internal";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();

        if (response.status === 200) {
          setBlogs(response.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <Loader text="blogs" />;
  }

  if (blogs.length === 0) {
    return (
      <div className="flex items-center justify-center my-[50px]">
        <p className="text-[24px] font-bold">No blogs available.</p>
      </div>
    );
  }

  return (
    <div className="my-[50px] mx-0 flex flex-col gap-[50px] flex-wrap items-center">
      {blogs.map((blog) => (
        <article
          key={blog._id}
          className="bg-black border border-[#fff] rounded-[10px] w-[80%] p-[16px] my-[40px] mx-[20px] cursor-pointer flex flex-col items-center justify-center"
          onClick={() => navigate(`/blog/${blog._id}`)}
        >
          <h1 className="text-left my-[15px] mx-0 bg-transparent text-[#fff] hover:text-[#3861fb]">
            {blog.title}
          </h1>
          <img
            src={blog.photo} // Fallback image
            alt={blog.title || "Blog Image"}
            className="w-[400px] h-[400px] rounded-[10px] object-cover"
          />
          <p className="mt-[20px] font-bold">{blog.content}</p>
        </article>
      ))}
    </div>
  );
};

export default Blog;
