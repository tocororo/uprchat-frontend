<template>
  <div
    class="border-2 bg-green-700 rounded-r-lg p-4 text-white flex flex-col gap-2 absolute h-4/5 w-2/5 z-10"
  >
    <button
      class="border-2 p-1 rounded-lg flex justify-center bg-green-800 hover:bg-green-700"
    >
      <img src="/src/assets/add.svg" alt="" />
      <span>Nuevo Chat</span>
    </button>
    <div class="border-2 p-1 rounded-lg grow flex flex-col">
      <h3 class="text-center underline">Historial</h3>
      <ul class="flex flex-col gap-1 grow overflow-y-scroll">
        <li class="flex justify-between">
          <span>Chat 1</span
          ><button><img src="/src/assets/delete.svg" alt="" /></button>
        </li>
      </ul>
    </div>
  </div>
</template>
