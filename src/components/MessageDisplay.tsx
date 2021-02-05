import * as React from 'react'

const MessageDisplay: React.FC = ({ children }) => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <h1 className="text-5xl">{children}</h1>
    </div>
  )
}

export default MessageDisplay
