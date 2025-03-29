import Search from "../assets/search.svg";

export default function Input() {
  return (
    <div className="bg-white flex w-4/12 rounded-lg overflow-hidden border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
      <input 
        type="text" 
        placeholder="Digite um usuário do Github"  
        className="p-4 flex-1 outline-none text-gray-700 placeholder-black font-semibold"
      />
      <button className="bg-blue-500 hover:bg-blue-600 transition-colors p-4 flex items-center  rounded-lg justify-center">
        <img src={Search} alt="Find" className="w-5 h-5" />
      </button>
    </div>
  );
}