import Shopping from '../Images/Shopping.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <div className='flex flex-wrap items-center justify-center flex-1 gap-20 p-8 bg-gradient-to-l from-violet-300'>
            <section className='flex flex-col gap-4'>
                <p className='font-bold tracking-widest text-gray-400 uppercase'>
                    The best online store in the world!
                </p>
                <h1 className='uppercase'>
                    A few clicks is all it takes!
                </h1>
                <Link style={navStyle} to='/catalog'>
                    <button className='flex items-center justify-center h-16 text-3xl text-white -translate-y-1 bg-black border-none rounded-full shadow-sm outline-none cursor-pointer w-[15rem] hover: hover:scale-110'>
                        Shop Now
                    </button>
                </Link>
            </section>
            <img className='flex h-[20rem] w-[30rem] rounded-2xl' src={Shopping} alt='Computer Aesthetic' />
        </div>
    )
}

export default Home
