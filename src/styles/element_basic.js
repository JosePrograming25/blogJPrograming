const article = () => {
  return 'w-full sm:w-full md:w-[90%] lg:w-[900px] px-4'
}

const titleArticle = param => {
  let content = ''
  if (param === 'css') content = 'bg-CSS'
  return `titleArticle ${content}`
}
const dtitleArt = () => {
  return 'text-[1rem] font-normal my-1'
}
const pArticle = () => {
  return 'text-[1.125rem] indent-12 py-4'
}

const subArticle = () => {
  return 'text-2xl font-semibold my-4'
}

const aLink = () => {
  return "text-[#9696d3] font-bold transition-all duration-300 ease relative inline-block before:content-[''] before:absolute before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-transparent before:transition-all before:duration-200 before:ease hover:before:bg-[#b0b0f1] hover:text-[#b0b0f1] indent-0"
}

export {
  aLink,
  article,
  titleArticle,
  dtitleArt,
  pArticle,
  subArticle

}
