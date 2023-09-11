import React from 'react'

export default function Search() {
  return (
    <div className='p-6 md:ml-20 md:mr-20'>
    <div className="mt-8 px-4 py-4 bg-rose-600 rounded-2xl   justify-center ">
    <div className="flex-col justify-center items-center gap-1 flex">
        <div className=" text-white text-xl font-bold leading-normal">A donde quieres hacer el envío?</div>
        <div className="text-white text-sm font-medium leading-tight">Selecciona la ubicación</div>
    
    <div className="w-[331px] pl-4 pr-8 py-[18px] bg-white rounded-2xl border border-zinc-100 justify-center items-center gap-2.5 inline-flex">
        <div className="justify-center items-center gap-1.5 flex">
                <div className=" text-neutral-700 font-semibold">Santo Domingo |</div>
        </div>
        <div className="ml-24 text-center text-zinc-300 text-xs font-semibold leading-none">9/16</div>
        </div>
    </div>
</div>
    </div>
  )
}
