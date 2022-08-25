import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="h-[450px] w-full bg-white">
        <div className="w-[1000px] h-full mx-auto flex items-center justify-center">
          <div className="flex-1 mr-8">
            <div className="text-blue-500">Арга хэмжээ</div>
            <div className="text-[30px] italic">
              Nullam sit amet
              <span className="font-bold"> tellus lincidunt</span> laoreel lorem
              cursusneque
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="text-blue-500 text-[50px] font-bold">21</div>
                <div className="text-gray-500">8 САР</div>
              </div>
              <div className="ml-4 mt-4">
                <div className="font-bold text-gray-900 text-[20px]">
                  Facilisis rutrum anenean id ullamcopper
                </div>
                <div className="text-gray-500">Админ / хурлын заал</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="text-blue-500 text-[50px] font-bold">27</div>
                <div className="text-gray-500">8 САР</div>
              </div>
              <div className="ml-4 mt-4">
                <div className="font-bold text-blue-700 text-[20px]">
                  Donec faucibus erat, ut varius orci ultricies vitae
                </div>
                <div className="text-gray-500">
                  Админ / корпорэйт зочид буудал
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-8">
            <div className="text-blue-500">Сүүлийн үеийн мэдээ</div>
            <div className="text-[30px] italic">
              Enter your <span className="font-bold">email address</span> for
              our mailing list to keep your self update
            </div>
            <div className="py-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </div>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Цахим шуудангаа оруулна уу"
                className="w-full focus:outline-none bg-white border rounded px-2 py-1"
              />
              <div className="py-2 px-4 bg-blue-700 text-white font-bold">
                Илгээх
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full bg-[#E5E5E5] flex flex-col items-center justify-center">
        <img src="/img/footer_logo.png" alt="footer logo" />
        <div className="pt-20 pb-6 font-bold font-[roboto]">
          Махатма Ганди гудамж 39, Сүхбаатар, Улаанбаатар, Монгол, 17011{" "}
          <span className="text-gray-500 font-normal">
            - (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN
          </span>
        </div>
        <img src="/img/Footer.png" alt="footer" />
      </div>
    </div>
  );
};

export default React.memo(Contact);
