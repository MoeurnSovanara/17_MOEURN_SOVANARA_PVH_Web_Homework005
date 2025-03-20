import Image from "next/image";
import Profile from "/public/image/profile.svg";
import HomeIcon from "/public/icon/home.png";
import Book from "/public/icon/book.png";
import school_cartoon from "/public/icon/school_cartoon.png";
import video from "/public/icon/video.png";
import music from "/public/icon/music.png";
import camera from "/public/icon/camera.png";
import weight from "/public/icon/weight.png";
import code from "/public/icon/code.png";
import airplane from "/public/icon/airplane.png";
import edit from "/public/icon/edit.png";
import setting from "/public/icon/setting.png";
import Link from "next/link";
// import { usePathname } from "next/navigation"
export default function Sidebar() {
  // const pathname= usePathname();
  return (
    <>
      {/* Component Start */}
      <div className="flex flex-col items-center w-full h-screen overflow-hidden text-gray-700 bg-white rounded">
        <div className="mt-7">
          <Image src={Profile} className="place-self-center" />
          <span className="ml-2 text-sm font-bold text-center flex justify-center py-2 text-[20px] text-[#0B3954]">
            Moeurn Sovanara
          </span>
          <p className="text-[#087E8B] py-1 text-[20px]">
            pozzliik1280@gmail.com
          </p>
        </div>
        <div className="w-full px-2 ml-20">
          <div className="flex flex-col items-center w-full mt-2">
            <Link
              href="/home"
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={HomeIcon} />
              <span className="ml-2 text-[20px] font-medium">Home</span>
            </Link>
            <Link
              href="/book-category"
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={Book} />
              <p className="ml-2 text-[20px] font-medium">
                Book Categories
              </p>
            </Link>

            <Link
              href="/cartoon-category"
              className="flex items-center w-full h-12 px-3 mt-2  hover:bg-gray-300"
            >
              <Image src={school_cartoon} />
              <p className="ml-2 text-[20px] font-medium">
                Old-School Cartoons
              </p>
            </Link>

            <Link
              href="#"
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={video} />
              <span className="ml-2 text-[20px] font-medium">
                Movies & TV Shows
              </span>
            </Link>

            <Link
              href="#"
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={music} />
              <span className="ml-2 text-[20px] font-medium">Music</span>
            </Link>

            <Link
              href="#"
              className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={camera} />
              <span className="ml-2 text-[20px] font-medium">Photography</span>
            </Link>
            <Link
              href="#"
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={weight} />
              <span className="ml-2 text-[20px] font-medium">
                Sports & Fitness
              </span>
            </Link>

            <Link
              href="#"
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={code} />
              <span className="ml-2 text-[20px] font-medium">
                Technology & GadGets
              </span>
            </Link>
            <Link
              href="#"
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={airplane} />
              <span className="ml-2 text-[20px] font-medium">
                Travel & Exploration
              </span>
            </Link>
            <Link
              href="#"
              className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <Image src={edit} />
              <span className="ml-2 text-[20px] font-medium">
                Writing & Journaling
              </span>
            </Link>
          </div>
        </div>

        <Link
          href="#"
          className="flex items-center pl-7 w-[80%] h-16 mt-auto bg-gray-200 rounded-[5%] m-10 hover:bg-gray-300"
        >
          <Image src={setting} />
          <span className="ml-2 text-[20px] font-medium">Settings</span>
        </Link>
      </div>
      <div className="group fixed bottom-0 right-0 p-2  flex items-end justify-end w-24 h-24 ">
        {/* main */}
        <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  ">
          <svg
            className="w-6 h-6 group-hover:rotate-90 transition-all duration-[0.6s]"
            fill="#ffffff"
            height="80px"
            width="80px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 458.624 458.624"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871
                        c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286c39.79,0,72.047-32.257,72.047-72.047
                        C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491
                        c-10.974-6.759-23.892-10.666-37.727-10.666c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047
                        c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047
                        c39.79,0,72.047-32.257,72.047-72.047C411.635,346.787,379.378,314.529,339.588,314.529z"
                />
              </g>
            </g>
          </svg>
        </div>
        {/* sub left */}
        <Link
          href="#"
          target="_blank"
          className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white"
        >
          <svg
            className="w-5 h-5"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
              stroke="#000"
              strokeWidth={2}
            />
            <circle cx="16.5" cy="7.5" r="1.5" fill="#000" />
            <circle cx={12} cy={12} r={3} stroke="#000" strokeWidth={2} />
          </svg>
        </Link>
        {/* sub top */}
        <Link
          href="#"
          target="_blank"
          className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white"
        >
          <svg
            className="w-5 h-5"
            width="800px"
            height="800px"
            viewBox="0 0 48 48"
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="cls-1"
              d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
            />
          </svg>
        </Link>
        {/* sub middle */}
        <Link
          href="#"
          target="_blank"
          className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white"
        >
          <svg
            className="w-5 h-5"
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M8 2L8 6L4 6L4 48L46 48L46 14L30 14L30 6L26 6L26 2 Z M 10 4L24 4L24 8L28 8L28 46L19 46L19 39L15 39L15 46L6 46L6 8L10 8 Z M 10 10L10 12L12 12L12 10 Z M 14 10L14 12L16 12L16 10 Z M 18 10L18 12L20 12L20 10 Z M 22 10L22 12L24 12L24 10 Z M 10 15L10 19L12 19L12 15 Z M 14 15L14 19L16 19L16 15 Z M 18 15L18 19L20 19L20 15 Z M 22 15L22 19L24 19L24 15 Z M 30 16L44 16L44 46L30 46 Z M 32 18L32 20L34 20L34 18 Z M 36 18L36 20L38 20L38 18 Z M 40 18L40 20L42 20L42 18 Z M 10 21L10 25L12 25L12 21 Z M 14 21L14 25L16 25L16 21 Z M 18 21L18 25L20 25L20 21 Z M 22 21L22 25L24 25L24 21 Z M 32 22L32 24L34 24L34 22 Z M 36 22L36 24L38 24L38 22 Z M 40 22L40 24L42 24L42 22 Z M 32 26L32 28L34 28L34 26 Z M 36 26L36 28L38 28L38 26 Z M 40 26L40 28L42 28L42 26 Z M 10 27L10 31L12 31L12 27 Z M 14 27L14 31L16 31L16 27 Z M 18 27L18 31L20 31L20 27 Z M 22 27L22 31L24 31L24 27 Z M 32 30L32 32L34 32L34 30 Z M 36 30L36 32L38 32L38 30 Z M 40 30L40 32L42 32L42 30 Z M 10 33L10 37L12 37L12 33 Z M 14 33L14 37L16 37L16 33 Z M 18 33L18 37L20 37L20 33 Z M 22 33L22 37L24 37L24 33 Z M 32 34L32 36L34 36L34 34 Z M 36 34L36 36L38 36L38 34 Z M 40 34L40 36L42 36L42 34 Z M 32 38L32 40L34 40L34 38 Z M 36 38L36 40L38 40L38 38 Z M 40 38L40 40L42 40L42 38 Z M 10 39L10 44L12 44L12 39 Z M 22 39L22 44L24 44L24 39 Z M 32 42L32 44L34 44L34 42 Z M 36 42L36 44L38 44L38 42 Z M 40 42L40 44L42 44L42 42Z" />
          </svg>
        </Link>
      </div>
    </>
  );
}
