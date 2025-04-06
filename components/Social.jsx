import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaFacebook, FaGoogle } from 'react-icons/fa'
const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaFacebook />, path: "" },
    { icon: <FaGoogle />, path: "" },
]
export default function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link
                        href={social.path}
                        key={index}
                        className={iconStyles}>
                        {social.icon}
                    </Link>
                )
            }
            )
            }
        </div>
    )
}
