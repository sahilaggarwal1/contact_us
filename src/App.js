import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="">
      <nav>
        <ul className="">
          <li className="my-1 mx-4 sm:mx-24 w-20">
            <img src="Images/Frame.png" alt="logo" />
          </li>
        </ul>
      </nav>
      <div className="font-extrabold text-3xl sm:text-5xl my-8 sm:my-16 mx-4 sm:mx-44 w-full">
        CONTACT US
      </div>
      <div className="my-1v mx-4 sm:mx-44 h-auto sm:h-20 text-sm sm:text-lg text-gray-500 font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        autem fugiat non, recusandae aliquam veritatis quaerat enim expedita
        neque cupiditate! Eaque ipsam ullam nesciunt omnis fugit iste voluptates
        quis voluptas.
      </div>
      <div className="flex flex-col sm:flex-row mx-4 sm:mx-48">
        <form className="w-full sm:w-1/2 m-4 sm:m-10 gap-6 flex flex-col">
          <div className="gap-4 h-28">
            <div className="flex items-center gap-8 mb-4">
              <label className="flex items-center bg-black text-white gap-2 h-11 w-56 py-2 px-5 rounded-md">
                <img className="h-6" src="Images/Vector.png" alt="vector" />
                VIA SUPPORT CHAT
                <input type="button" />
              </label>
              <label className="flex sm:ml-auto items-center justify-center bg-black text-white gap-2 h-11 w-56 py-2 px-5 rounded-md">
                <img
                  className="h-6"
                  src="Images/ic_baseline-phone.png"
                  alt="vector"
                />
                VIA CALL
                <input type="button" />
              </label>
            </div>
            <label className="flex items-center justify-center h-11 rounded-md border border-solid border-black gap-2 px-5 py-2">
              <img
                className="h-6 gap-2"
                src="Images/ic_outline-message.png"
                alt="balaji"
              />
              VIA EMAIL FORM
              <input type="button" />
            </label>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="relative h-11 top-3 flex">
              <input
                id="name"
                type="text"
                autocomplete="off"
                className="absolute w-full h-full border peer transition-colors focus:-z-10"
              />
              <label
                className="absolute text-md top-0 left-2 flex flex-col cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:left-2 transition-all peer-focus:font-extrabold peer-focus:z-10 "
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="relative h-11 top-3 flex">
              <input
                id="email"
                type="text"
                autocomplete="off"
                className="absolute w-full h-full border peer transition-colors focus:-z-10"
              />
              <label
                className="absolute text-md top-0 left-2 flex flex-col cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:left-2 transition-all peer-focus:font-extrabold peer-focus:z-10 "
                htmlFor="email"
              >
                E-mail
              </label>
            </div>
            <div className="relative h-11 top-3 flex">
              <input
                id="TEXT"
                type="text"
                autocomplete="off"
                className="absolute w-full h-full border peer transition-colors focus:-z-10"
                rows="10"
              />
              <label
                className="absolute text-md top-0 left-2 flex flex-col cursor-text peer-focus:text-sm peer-focus:-top-5 peer-focus:left-2 transition-all peer-focus:font-extrabold peer-focus:z-10 "
                htmlFor="TEXT"
              >
                TEXT
              </label>
            </div>
            <input
              className="rounded-md gap-3 px-5 py-2 bg-black text-white w-56 sm:ml-auto"
              type="submit"
            />
          </div>
        </form>
        <div className="w-full sm:w-1/2">
          <img
            src="Images/Service.png"
            alt="services"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
