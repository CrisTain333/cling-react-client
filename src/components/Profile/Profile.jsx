import React from 'react'
import TelegramIcon from '../../assets/logos/telegram.png'
import GithubIcon from '../../assets/logos/github.png'
import InstagramIcon from '../../assets/logos/instagram.png'

const Profile = () => {

    const image = 'https://i.pinimg.com/550x/b4/23/ee/b423ee8161ffc5c8310f8a4b4c993734.jpg';
    const name = 'Hinata Hyuga';
    const bio = 'React Developer';

  return (
    <div className='container h-screen flex'>

        {/* Profile Section  */}
        <div className='profile__section h-5/6 w-1/4'>

            {/* Profile Card  */}
            <div className="profile__card card bg-base-200 h-1/2 items-center shadow-2xl mt-8">
                <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover mb-6 mt-8 " />
                <h1 className="text-2xl font-bold mb-1">{name}</h1>
                <span className='w-24 border-b-4 border-primary mb-2'></span>
                <p className="text-gray-600 text-lg mb-8">{bio}</p>
            </div>

            {/* Social Icons  */}
            <div className="social__icons h-1/2 flex flex-col justify-end items-center">
                <h1 className="text-xl font-bold mb-1">Let's Connect: </h1>
                <span className='w-24 border-b-4 border-secondary mb-2'></span>

                <div class="social-icons flex w-full justify-evenly m-8">
                    <a href="https://t.me/Tapas_20" target="_blank"><img src={TelegramIcon} alt="Telegram logo" className='w-8 hover:-translate-y-1'/></a>
                    <a href="https://github.com/tapas-code" target="_blank"><img src={GithubIcon} alt="Github logo" className='w-8 hover:-translate-y-1'/></a>
                    <a href="https://www.instagram.com/cinechrons/" target="_blank"><img src={InstagramIcon} alt="Instagram logo" className='w-8 hover:-translate-y-1'/></a>
                </div>

            </div>

        </div>

        {/* User Details Section  */}
        <div className='user__section border-2 border-red-500 h-5/6 w-3/4 mt-8 ml-4 p-4'>
            <h1>This is the user details section</h1>
        </div>

    </div>
  );
}

export default Profile
