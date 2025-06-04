function Table({ children }) {
  return (
    <div className="bg-white overflow-x-auto rounded-md mt-10">
      <table className="w-full">{children}</table>
    </div>
  );
}

export default Table;
//  <thead className="bg-[#f7f7f8]">
//           <th className="px-[20px] py-[30px] font-semibold text-left">
//             <td className="px-[15px] py-[30px] align-middle whitespace-nowrap"></td>
//           </th>
//         </thead>
