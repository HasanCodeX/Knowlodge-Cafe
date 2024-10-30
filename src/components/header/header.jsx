import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex items-center justify-between items-center border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile" className='ml-4' />
        </div>
    );
};

export default Header;
