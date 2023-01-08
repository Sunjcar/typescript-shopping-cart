import { FaGithub } from 'react-icons/fa'

export const About = () => {
    return (
        <div className='flex flex-col items-center justify-center flex-1 w-auto gap-4 p-2 text-whit'>
            <p> Check Out My Github For Other Apps!</p>
            <a href="https://github.com/sunjcar" target="_blank" rel='noreferrer' className='transition ease-in-out delay-150 cursor-pointer  text-8xl hover:-translate-y-1 hover:scale-110 hover:rotate-720'>
                <FaGithub />
            </a>
        </div>
    )
}
