import React from 'react'

function Card({username,number,year}){
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl gap-4">
        
    <div>
      <img
        className="size-48 shadow-xl rounded-md"
        alt=""
        src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
      />
    </div>

    <div className="flex flex-col items-center gap-1">
      <span className="text-2xl font-bold">{username}</span>
      <span className="text-gray-600">username</span>

      <span className="flex gap-1 text-gray-500">
        <span>{number}</span>
        <span>·</span>
        <span>{year}</span>
      </span>
    </div>

  </div>
  )

}
export default Card