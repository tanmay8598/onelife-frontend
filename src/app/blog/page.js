"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import apiClient from "@/api/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  // console.log(pathname);
  const [getList, setGetList] = useState([]);
  const [pageCount, setPageCount] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);

  const fetchBlogs = async () => {
    const { data } = await apiClient.get("/blog", {
      pageNumber: currentPageNo,
    });

    setPageCount(data.pageCount);
    setGetList(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl  py-10 px-3  lg:h-full  lg:mb-40 lg:mt-20">
      {/* heading  */}
      <div className="w-full ">
        <p className="text-orange text-xl lg:text-[30px] font-pacifico">Blog</p>
        <h1 className="text-3xl font-bold lg:text-6xl lg:mt-5 text-black ">
          Insights and news shaping the future of travel.
        </h1>
      </div>

      {/* blog list  */}

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20  place-items-center lg:mt-10">
        {getList?.map((blog) => {
          return (
            <Link
              className="w-full text-black no-underline"
              href={`/blog/${blog?.slug}`}
              key={blog?._id}
            >
              {/* image  */}
              <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
                <Image
                  src={blog?.image}
                  alt="blog"
                  priority={true}
                  fill={true}
                />
              </div>

              <p className="text-sm lg:text-base mt-2">{blog?.heading}</p>

              <p className="font-semibold text-sm lg:text-base mt-2">
                Read Full Blog
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
