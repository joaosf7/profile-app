function Link({href, icon}){
    return(
        <a href={href} className="profile-link">
            <i className={icon}></i>
        </a>
    )
}

export default Link