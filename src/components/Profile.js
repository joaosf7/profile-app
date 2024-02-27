import DATA from './data'
import Link from './Link'
import './Profile.css'

function Profile(){
    return (
        <div className='container'>
            <h1 className='title'>{DATA.name}</h1>
            <img className='char-image' src={require('../assets/kim.png')}  />
            <p className='description'>{DATA.description}</p>
            <ul className="profile-list">
                {console.log(DATA.socialMedia)}
                {DATA.socialMedia.map(media => (
                    <li key={media.href}>
                        <Link {...media} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Profile