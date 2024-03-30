import Button from "../Elements/Button";
import Navbar from "../Fragments/Navbar";

const email = localStorage.getItem("email");

const HomePage = () => {

   return (
      <div>
         <Navbar />
         <section className="flex justify-between items-center mt-10 pl-10">
            <div className="flex flex-col gap-10">
               <p className="font-bold text-3xl text-[#3B3B3B]">Selamat Siang, {email}👋</p>
               <p className="font-bold text-3xl text-[#3B3B3B]">Masalah Apa yang bisa kami bantu?</p>
               <Button classname="bg-green-800 shadow-3xl w-fit">Laporkan Maslaah</Button>
            </div>
            <div className="decor">
               <img src="/images/decor.svg" alt="Oops" />
            </div>
         </section>
      </div>
   );
};

export default HomePage;
