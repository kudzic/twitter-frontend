import React from "react";
import profile from "../images/profile.png";

const home = () => {
  return (
    <div>
      <div className="flex  ml-10  " >
       <div className="border-r  " style={{width:'18%'}}>
       <div
        className="pr-10  mt-10 flex"
        style={{ height: "100vh", width: "20%" }}
        >
          <div className="ml-0">
            <div className="mb-10 w-10">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </div>
            <div className="mb-10 flex items-center space-x-2">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-6 h-6 fill-current "
              >
                <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path>
              </svg>
              <div className="text-xl">
                Home
              </div>
            </div>
            <div className="mt-9 mb-8">
              <div className="flex items-center space-x-2">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-6 h-6 fill-current "
                >
                  <path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
                </svg>
                <div className="text-xl">Explore</div>
              </div>
            </div>
            <div className="flex items-center mr-2 space-x-2">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <g>
                  <path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path>
                </g>
              </svg>
              <div className="text-xl">Notifcations</div>
            </div>
            <div className="mt-8 mb-8">
              <div className="flex items-center space-x-2 ">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-6 h-6 fill-current "
                >
                  <g>
                    <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
                  </g>
                </svg>
                <div className="text-xl">Messages</div>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="ml-2">
                  <span className="text-xl">Profile</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <g>
                        <path
                          fill="currentColor"
                          d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="ml-2">
                    <span className="text-xl">Communities</span>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <g>
                        <path
                          fill="currentColor"
                          d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="ml-2">
                    <span className="text-xl">Bookmarks</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="bg-blue-200 absolute flex items-center"
                style={{ borderRadius: "50%", width: "60px", height: "60px" }}
              >
                <div className="flex items-center mx-4 my-4">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <g>
                      <path
                        fill="currentColor"
                        d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div style={{ width: "58%" }} className="mt-5">
       <div>
          <div
            className="flex border-b pb-2 gap-0 "
           
          >
            <a className="w-1/3 justify-center text-center mx-auto">
              <div className="text-xl text-center" style={{width:'50%'}}>For you</div>
            </a>
            <a className="w-1/3 justify-center text-center mx-auto">
              <div className="text-xl  " style={{width:'50%'}}>Following</div>
            </a>
          </div>
          <div className="flex border-b pb-4">
            <img src={profile} className="mx-8 mt-6 w-7 h-7"></img>
            <input
              type="text"
              className="border rounded-xl w-2/3 mt-5 h-10 px-3 "
              placeholder="What is happening?!"
            ></input>
          </div>
        </div>
       </div>
       
        <div className="border-l" ></div>
      </div>
    </div>
  );
};

export default home;
