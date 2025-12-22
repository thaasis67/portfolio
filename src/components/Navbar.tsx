import { Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className=' w-full absolute top-0 left-0 flex justify-between items-center px-4 md:px-8 py-4 z-20 text-white'>
      <div className='flex items-center gap-3'>
        <Link to="/" className='text-2xl font-bold custom-title ml-0'>
        Ashish Limbu
        </Link>
      </div>
      <div className='flex gap-6'>
        <Link to="/about" className='text-base text-light-100 hover:text-white'>About</Link>
        <Link to="/projects" className="text-base text-light-100 hover:text-white">Projects</Link>
        <Link to="/contacts" className='text-base text-light-100 hover:text-white'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;