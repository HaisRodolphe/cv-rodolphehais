import React from "react";
import "./User.css"

import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';



function User() {
    return (
        <div className="user">
            <img src="./images/Photomoi.jpg" alt="" className="user__avatar" />
            <h1 className="user__name">Rodolphe HAIS</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__infos">
                <p className="user__info"><HomeIcon />
                    27, rue de la sablonniére 28250 Senonches
                </p>
                <p className="user__info">
                    <a href="tel:+33628407987"><LocalPhoneIcon />
                        0628407987
                    </a>
                </p>
                <p className="user__info">
                    <a href="mailto:rodolphe.hais@gmail.com"><MailIcon />
                        rodolphe.hais@gmail.com
                    </a>

                </p>
                <p className="user__info"><EventIcon />
                    Date de naissance : 19 mars 1979
                </p>
                <p className="user__info"><LocationOnIcon /></p>
            </div>


        </div>
    )
}

export default User
