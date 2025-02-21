import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import copy from 'clipboard-copy'

const CopyButton = ({ handleCopy }) => {
  return (
    <button onClick={handleCopy} className='h-[40px] w-[40px] bg-COPY bg-no-repeat hover:bg-[#322d3a85] rounded-lg absolute right-0 mr-2 mt-2 before:opacity-0 before:transition-all before:duration-300 before:ease-out transition-all duration-300 ease-out' />
  )
}

const CodeSnippet = ({ code, lenguage }) => {
  const handleCopy = e => {
    const targetClass = e.target
    const change = targetClass.className.split(' ')
    const index = change.findIndex((element) => element === 'bg-COPY')
    change[index] = 'bg-CHECK'
    const changetemp = change.join(' ') + ' before:content-["Copiado!"] before:bg-[#fffefe10] before:inline-block before:py-2 before:px-3 before:rounded-md before:ml-[-150px] before:opacity-100'

    targetClass.className = changetemp
    setTimeout(() => {
      change[index] = 'bg-COPY'
      targetClass.className = change.join(' ')
    }, 2000)
    copy(code).then(() => console.log('copiado'))
  }

  return (
    <div className='relative'>
      <CopyButton handleCopy={handleCopy} />
      <SyntaxHighlighter language={lenguage} style={atelierCaveDark} className='rounded-lg shadow-lg shadow-violet-700/5 overflow-x-auto text-base my-8 font-stretch-ultra-condensed' customStyle={{ padding: '50px 15px 25px 30px' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
