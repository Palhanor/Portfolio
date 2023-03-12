import React from "react";

// TODO: Fazer o filtro dos elementos de forma desacoplada (usar o setter de cada componente dinamicamente)
export default function Filters({ placeholder }: { placeholder: string }) {
  return (
    <form className="mb-6 w-full flex justify-between items-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-[90%] p-4 rounded-md outline-none shadow-sm border-solid border border-gray-200"
      />
      {/* TODO: Receber a lista de elementos que devem ser exibidas dentro do campo select */}
      <select className="w-[8%] p-4 rounded-md shadow-sm bg-white border-solid border border-gray-200">
        <option value="todos">Todos</option>
        <option value="html5">HTML5</option>
        <option value="css3">CSS3</option>
        <option value="javascript">JavaScript</option>
      </select>
    </form>
  );
}
