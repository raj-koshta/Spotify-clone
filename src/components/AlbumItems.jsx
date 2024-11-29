import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItems = ({image,name,desc,id}) => {

  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#787777] hover:text-black'>
        <img className='rounded' src={image} alt=''/> 
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm hover:text-black'>{desc}</p>
    </div>
  )
}

export default AlbumItems