import Form from "../components/Form";

export default function Contact() {
  return (
    <div className=" pb-20  py-10 mx-auto">

      <div className="text-center">
        <p className="p- text-3xl font-bold"> Contact </p>
      <p className="pb-5 text-2xl">
        Do you have any question? contact me </p> </div>
      

      <div className="p-5 justify-center max-w-[900px] mx-auto items-center max-md:space-y-10 md:grid grid-cols-2 gap-5 ">
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="flex flex-col justify-center items-center w-full rounded-sm">
            <img
              className="w-full rounded-sm h-[370px]"
              src="./contact.png"
              alt="contact"
            />
          </div>
        </div>

        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
