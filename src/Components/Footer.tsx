import { FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='flex items-center justify-center w-auto gap-4 p-2 text-white bg-neutral-800'>
            <p className='footer'>Copyright © Ray Chen</p>
            <a href="https://github.com/sunjcar" target="_blank" rel='noreferrer' className='text-3xl transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:rotate-720'>
                <FaGithub />
            </a>
        </div>
    )
}

export default Footer
