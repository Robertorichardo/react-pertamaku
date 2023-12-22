import { useEffect, useState } from "react";
import PortoCard from "../components/componen/PortoCard";

export default function Portofolio() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
    
};
const portoGambar = [
    "/react-pertamaku/rori.jpg",
    "/react-pertamaku/Biodata2.png",
    "/react-pertamaku/logindata.png",
]
  return (
    <div>
      <header className="px-8 md:px-20 py-6 bg-sky-100 bg-opacity-70 backdrop-blur fixed w-full z-50">
        <nav className="flex justify-between items-center">
          <div className="text-4xl font-teko hover:text-sky-700">Rori</div>
          <div className="hidden md:block">
            <ul className="flex gap-12">
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400"
                  href="#portofolio"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400"
                  href="#Contact"
                >
                  Contat
                </a>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <button onclick="{toggleMenu}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="{16}"
                width="{14}"
                viewBox="0 0 448 512"
                classname={show ? "hidden" : ""}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="{16}"
                width="{12}"
                viewBox="0 0 384 512"
                classname={show ? "" : "hidden"}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </nav>
        <div className={"absolute right-16 " + (show ? "" : "hidden")}>
          <ul className="py-2 rounded-ig bg-white">
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#home">Home</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#portofolio">Portofolio</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#Contact">Contat</a>
            </li>
          </ul>
        </div>
      </header>
      <section className="pt-20 pd-12" id="home">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-4 px-8 md:px-20">
            <p>Hi, I'm</p>
            <h1 className="text-3xl md:text-5xl Font-bold">
              Roberto Richardo
              <span className="text-sky-500 block">Safanpo Bokoropces</span>
            </h1>
            <p className="text-xl">
              I'm a <span className="text-sky-500">Frontend Developer</span>{" "}
              with 2 years of experimence.
            </p>
            <div className="flex items-center justify-center text-gray-500 mg-4 gap-4">
              <a
                href="https://facebook.com/krizer"
                className="w-6 h-6 hover:text-blue-500"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/bokoropces_24/"
                className="w-6 h-6 hover:text-sky-200"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href className="w-6 h-6 hover:text-blue-500" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@prkm.story"
                className="w-6 h-6 hover:text-yellow-200"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-current w-full h-full"
                >
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 -order-1 md:order-1 md:col-span-6 p-20 md:p-28">
            <div className="rounded-full border-8 hover:scala overflow-hidden w-fit">
              <img src="/react-pertamaku/rori (2).jpg" alt="Rori" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-20 bg-slate-700" id="portofolio">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-teko">
            Portofolio
          </h2>
          <div className="h-1 bg-sky-500 my-4" />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <PortoCard gambar= {portoGambar[0]}  title="Web Design" descriPtion="random text disini"/>
          <PortoCard gambar= {portoGambar[1]}  title="React Web" descriPtion="web dengan react"/>
          <PortoCard gambar= {portoGambar[2]}  title="GreenCycle" descriPtion="web recycling"/>
        </div>
      </section>
      <section className="p-12 md:p-20" id="skills">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-teko">
            My Skills
          </h2>
          <div className="w-1/12 h-2 bg-green-500 my-4" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox=" 0 0 384 512"
                className="fill-orange-500 w-20 h-20"
              >
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-semaibold">HTML 5</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="fill-blue-500 w-20 h-20"
              >
                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-semaibold">CSS</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="fill-green-500 w-20 h-20"
              >
                <path d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4 .1l14.8 8.8c.5 .3 1.3 .3 1.8 0L375 408c.5-.3 .9-.9 .9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6 .3-.9 1-.9 1.6v66.7c0 .6 .4 1.2 .9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9 .7-1.7 1.7-1.7h7.3c.9 0 1.7 .7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6 .2 .8 .8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5 .3-.4 .5-.8 .4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7 .7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7 .1 1.8 1.2 2.1 2.8 .1 1 .3 2.7 .6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3 .4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3 .7 2.5 1.8 3.2 1.1 .7 2.5 .7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6 .3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1 .7 2.6 .7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6 .3-.9 .9-.9 1.6v24.3c0 .7 .4 1.3 .9 1.6l21 12.1c.6 .3 1.3 .3 1.8 0l21-12.1c.6-.3 .9-.9 .9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3 .7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1 .7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4 .3-.7 .7-.7 1.2v13.6c0 .5 .3 1 .7 1.2l11.8 6.8c.4 .3 1 .3 1.4 0L584 235c.4-.3 .7-.7 .7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7 .1-.5 .2-1.1 .2-1.7zm-74.3-124.9l-.8 .5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-semaibold">Node</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="fill-yellow-500 w-20 h-20"
              >
                <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-semaibold">JavaScript</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-20 bg-slate-700" id="Contact">
        <div className="flex flex-col items-center">
          <div className="text-white text-center pb-10">
            <h1 className="text-3xl font-bold">Contact Me</h1>
          </div>
          <div className="rounded-2xl border-[3px] border-whith overflow-hidden hover:scala-105">
            <a
              href="https://wa.me/62878-6047-0928"
              target="_blank"
              className="flex items-center gap-6 text-2xl-font-semibold px-6 py-3 text-white bg-[#11B517] hover:bg-[#la90le]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={60}
                width={60}
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <h1 className="hidden sm:block">Contact Me on whatsapp</h1>
            </a>
          </div>
        </div>
      </section>
      <footer className="p-4 md:p-8 bg-slate-900">
        <div className="flex items-center justify-center text-white mg-4 gap-4">
          <a
            href="https://facebook.com/krizer"
            className="w-6 h-6 hover:text-blue-500"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current w-full h-full"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bokoropces_24/"
            className="w-6 h-6 hover:text-sky-200"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-current w-full h-full"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a href className="w-6 h-6 hover:text-blue-500" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current w-full h-full"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@prkm.story"
            className="w-6 h-6 hover:text-yellow-200"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-current w-full h-full"
            >
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </a>
        </div>
        <section className="p-12 md:p-8 bg-slate-900">
          <p className="text-center text-white">
            Copyright © 2023 - All righats reserved <br />
            Made by Misbach
          </p>
          <a
            href="#home"
            className="fixed  bottom-10 right-10 rounded-full p-4 bg-opcity=70 backdrop-blur"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              width={24}
              viewBox="0 0 512 512"
            >
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </a>
        </section>
      </footer>
    </div>
  );
}
