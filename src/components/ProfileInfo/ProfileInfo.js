import React from "react";
import './ProfileInfo.scss'

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <picture className='profile-info__picture'>
                <source srcSet='https://donttakefake.com/wp-content/uploads/2021/12/nft-dtf-magazine.jpg' type='image/webp'></source>
                <img className='profile-info__image' src='https://donttakefake.com/wp-content/uploads/2021/12/nft-dtf-magazine.jpg' alt='Фон' width='972' height='250'></img>
            </picture>
            <div className="profile-info__wrap">
                <img className="profile-info__ava" src="https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg" alt="Аватарка" width='100' height='100'></img>
                <div className="profile-info__description">
                    <div className="profile-info__group">
                        <span className="profile-info__label">Имя:</span>
                        <span className="profile-info__value">Виталий Чадаев</span>
                    </div>
                    <div className="profile-info__group">
                        <span className="profile-info__label">Профессия:</span>
                        <span className="profile-info__value">Джун верстальщик</span>
                    </div>
                    <div className="profile-info__group">
                        <span className="profile-info__label">Дата рождения:</span>
                        <span className="profile-info__value">15.01.2000</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo