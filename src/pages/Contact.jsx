import Form from "../components/Form";

export default function Contact() {
  return (
    <div className="bg-slate-100 md:py-60 py-20 max-w-[1000px] mx-auto">
      <p className="p-5 text-3xl font-bold"> Contact </p>
      <p className="p-5 text-2xl font-semibold">
        Do you have any question? contact me
      </p>

      <div className="p-5 justify-center items-center max-md:space-y-10 md:grid grid-cols-2 gap-5 ">
        <div className="flex flex-col md:flex-row gap-5 ">
          <div className="flex flex-col justify-center items-center w-full rounded-sm">
            <img
              className="w-full rounded-sm h-[400px]"
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
