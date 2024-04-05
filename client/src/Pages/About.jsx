
import ImageSlider from '../Components/Image';
import Edit from '../Components/Edit';

function About(){
    const images = [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
        'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
      ];
    return(
        <div>
            <div className="m-4 sm:m-6 md:m-10">
            <div className="border-2 border-solid border-gray-200 shadow-2xl shadow-gray-600">
                <div>
                <h1 className="text-red-500 pt-6 flex justify-center font-semibold text-xs  md:text-2xl">A Journey of Thousand Miles Begins With a Single Step</h1>
                <h1 className="text-blue-500 flex justify-center font-bold text-xl md:text-4xl lg:text-6xl">JAYA ENGINEERING COLLEGE</h1>
                <h4 className="flex justify-center font-normal text-xs md:text-xl font-semibold">Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai</h4>
                </div>
                <div>
                    <div className="px-6 pt-6  md:px-10 pt-10">
                        <h1 className="font-semibold border-b-2 border-gray-600 md:text-2xl">Overview</h1>
                    </div>
                    <div>
                        <div className="flex px-6 pt-6 pb-2 md:px-10">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18"><path fill="#0038ff" d="M11 3V0H2v14H0v1h7v-5h2V8h5V3zm-5 7H4V8h2zm0-3H4V5h2zm0-3H4V2h2zm3 3H7V5h2zm0-3H7V2h2zm4 3h-2V5h2zm1 4h2v5H8v-5h2V9h4z"/></svg></div>
                        <h1 className="text-justify md:text-xl">Jaya Engineering College (JEC) is an ISO 9001:2000 certified institution founded in the year 1995 with a focus on technological innovation, entrepreneurship and character building to the students. The college offers 9 UG courses and 7 PG courses. JEC is Affiliated to Anna University, Chennai and approved by AICTE, New Delhi. The college management team consists of well-experienced and committed Academicians and Administrators.</h1></div>
                        <div className="flex px-6 py-6 md:px-10">
                            <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#0038ff" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg></div>
                        <h1 className="text-justify md:text-xl">  Situated close to the Chennai Metropolis, the college is one of the foremost centres of graduate and professional education in the state of Tamilnadu. The range and depth of resources at the college have few peers. Within easy reach on the same campus and other sites, the college combines all the advantages of a comprehensive institution in the Arts and Science with a full complement of professional schools. Among these are business, dentistry and an unusually complete array of paramedical professions, including pharmacy and physiotherapy. </h1> </div>
                    </div>
                </div>
                <div className=" mx-6 md:flex md:mx-10 justify-center md:space-x-16">
                    <div className="w-full">
                        <div className="border-2  border-black shadow-lg shadow-gray-600 h-auto md:h-60 md:w-[80%] px-6 pb-4">
                            <h1 className="text-red-500 text-xl flex justify-center font-semibold border-b-2 border-gray-600">Institute Vision</h1>
                            <div className="pt-4 pl-4">
                            <ul className="list-disc">
                                <li>To achieve Excellence in Technical Education through Innovative Teaching.</li>
                                <li>Multidisciplinary Research with Professionalism to Serve the Global Society.</li>
                                <li>To Impart Knowledge to become Empowered Professionals in the field of Engineering and Management.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div>
                    <div className=" w-full pt-6 md:pt-0">
                        <div className="border-2 border-black shadow-lg shadow-gray-600 h-auto md:h-60 px-6 pb-4">
                            <h1 className="text-red-500 text-xl flex justify-center font-semibold border-b-2 border-gray-600">Institute Mision</h1>
                            <div className="pt-4 pl-4 md:pl-4 flex-wrap">
                            <ul className="list-disc">
                                <li>To Impart High quality Teaching and Learning for Engineering, Technology and Management Studies by providing State-of-art-infrastructure.</li>
                                <li>To Provide Quality Education, Self discipline and Ethical values.</li>
                                <li>To Associate with R&D and Industries to have Connectivity with the Society.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                <div className="px-6 pt-6 md:px-10 pt-10">
                        <h1 className="font-semibold border-b-2 border-gray-600 md:text-2xl">About the college</h1>
                    </div>
                    <div className="px-6 pt-6 pb-2 md: px-10">
                        <h1 className="text-justify md:text-xl pl-10">The undergraduate and post-graduate courses in the college offers its students the optimum setting in tertiary education specialized courses with a contingent of accessible and dedicated faculty members, within a large highly diverse college offerings nearly unlimited academic opportunities and resources. The lecture halls and laboratory areas are modern and well-equipped. The college has extensive links with IT facilities for the benefit of the students.</h1>
                        <h1 className="text-justify pt-6 md:text-xl pl-10"> The college ensures that all students have the opportunity to acquire and develop personal and transferable skills, such as technical communication and team-working skills, which are directly appropriate to their future courses.</h1>
                    </div>
                    <div className="flex justify-center items-center pb-4 pt-4">
                  <ImageSlider images={images} />
                </div>
                </div>
            <div className="md:flex gap-4">
                <div className="">
                <div>
                    <div className=" pl-16 pb-4 pt-10">
                        <div className="flex">
                            <div className="">
                            <div className="bg-blue-300 p-4 md: h-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="#ffffff"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337a49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224a.36.36 0 0 1 .172-.311a54.615 54.615 0 0 1 4.653-2.52a.75.75 0 0 0-.65-1.352a56.123 56.123 0 0 0-4.78 2.589a1.858 1.858 0 0 0-.859 1.228a49.803 49.803 0 0 0-4.634-1.527a.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805"/><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711a47.87 47.87 0 0 0-8.105 4.342a.75.75 0 0 1-.832 0a47.87 47.87 0 0 0-8.104-4.342a.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286c.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11c.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607a1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667a2.25 2.25 0 0 0 2.12 0"/><path d="M4.462 19.462c.42-.419.753-.89 1-1.395c.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794a.75.75 0 0 1-1.06-1.06"/></g></svg>
                            </div></div>
                            <div className="bg-blue-500 pl-6 pr-9 md:w-96">
                            <h1 className=" text-white flex justify-center font-semibold py-4 md:text-2xl ">Admission Procedure</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" pl-16 py-4">
                        <div className="flex">
                            <div className="">
                            <div className="bg-blue-300 p-4 md:h-16">
                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M19 3H4.99C3.89 3 3 3.9 3 5l.01 14c0 1.1.89 2 1.99 2h10l6-6V5c0-1.1-.9-2-2-2M8 8h8c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1m3 6H8c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1s-.45 1-1 1m3 5.5V15c0-.55.45-1 1-1h4.5z"/></svg>
                            </div></div>
                            <div className="bg-blue-500  pl-6 pr-8 md:w-96">
                            <h1 className=" text-white flex justify-center font-semibold py-4 md:text-2xl">Download Prospectus</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" pl-16 py-4">
                        <div className="flex">
                            <div className="">
                            <div className="bg-blue-300 p-4  md:h-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 640 512"><path fill="white" d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2m22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8zM16 128c-8.8 0-16 7.2-16 16v208c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zm32 192a16 16 0 1 1 0 32a16 16 0 1 1 0-32m496-192v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16zm32 208a16 16 0 1 1 32 0a16 16 0 1 1-32 0"/></svg>
                            </div></div>
                            <div className="bg-blue-500 pl-6 pr-14 md:w-96">
                            <h1 className=" text-white flex justify-center font-semibold py-4 md:text-2xl ">Placement Record <span className="text-blue-500">.</span></h1>
                            </div>  
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" pl-16 py-4">
                        <div className="flex">
                            <div className="">
                            <div className="bg-blue-300 p-4 md: h-16">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64"><path fill="white" d="M61.699 46.101a.813.813 0 0 0-.141-.113c-1.489-1.199-14.357-11.592-21.064-17.674c.218-.64.141-.904.141-.904l-6.374-6.375s.088.224-.079.787C28.029 14.849 19.118 3.815 18.014 2.443c.011.016.015.038.023.055c-.042-.071-.083-.142-.14-.197c-1.203-1.203-5.67 1.313-9.978 5.621C3.612 12.229 1.097 16.696 2.3 17.9a1 1 0 0 0 .201.14c-.019-.011-.042-.015-.061-.026c1.373 1.107 12.411 10.021 19.382 16.173c-.567.168-.789.073-.789.073l6.374 6.376s.258.092.911-.133c6.084 6.707 16.468 19.566 17.668 21.057c.034.049.072.096.115.141c.203.203.5.301.874.301c1.836 0 5.525-2.342 9.104-5.92c4.308-4.309 6.823-8.777 5.62-9.981M9.399 7.863c1.652-1.651 3.34-2.639 3.772-2.207a.406.406 0 0 1 .103.29c-.487-.163-1.72.567-2.906 1.754c-1.3 1.3-2.053 2.655-1.683 3.023c.157.159.494.111.931-.095c-1.14.888-2.109 1.318-2.423 1.005c-.432-.43.557-2.118 2.206-3.77m-5.062 8c-.361-.361-.249-1.135.23-2.155a.598.598 0 0 0 .156.397c.677.677 3.326-.874 5.918-3.462c2.591-2.591 4.14-5.241 3.462-5.918c-.256-.256-.794-.194-1.505.123c2.018-1.434 3.668-2.069 4.246-1.492c.903.904-1.164 4.437-4.617 7.89c-3.454 3.454-6.988 5.521-7.89 4.617m10.919-2.386l-.396.401c-.469.467-.939.917-1.414 1.349l14.486 14.484c-.6.576-1.146 1.075-1.652 1.515l-15.416-13.84c-.71.542-1.417 1.04-2.109 1.487l15.541 13.951c-.244.176-.459.315-.671.453c-5.074-4.514-12.585-10.692-16.979-14.271c2.352-1.236 4.922-3.365 6.959-5.403c.863-.864 3.799-3.911 5.397-6.961c3.469 4.262 9.71 11.852 14.271 16.979c-.092.142-.17.272-.278.429L19.224 8.712a35.437 35.437 0 0 1-1.545 2.045l13.739 15.304a45.278 45.278 0 0 1-1.707 1.871zm39.498 41.277c-3.396 3.396-6.345 5.11-7.536 5.343c-1.659-2.058-11.202-13.853-17.176-20.484c1.194-.773 2.868-2.107 5.165-4.404a48.086 48.086 0 0 0 2.56-2.75L56.991 51.16l1.636-1.922l-19.303-18.774c.108-.156.188-.288.278-.43c6.533 5.885 18.075 15.23 20.498 17.186c-.219 1.071-1.835 4.023-5.346 7.534"/><path fill="white" d="M32.428 41.338c5.558 6.359 12.84 15.326 15.017 18.02c.443-.162 1.166-.5 2.164-1.154c1.496-.979 3.119-2.328 4.693-3.903L37.021 37.019a101.143 101.143 0 0 1-4.593 4.319"/></svg>
                            </div></div>
                            <div className="bg-blue-500 pl-6 pr-28 md:w-96">
                            <h1 className=" text-white flex justify-center font-semibold py-4 md:text-2xl">Academics</h1>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                 <div className="pb-6 md:w-5/6 pt-10"> 
                    <Edit/>  
                 </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default About;