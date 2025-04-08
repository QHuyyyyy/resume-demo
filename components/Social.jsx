import { FaGithub, FaLinkedinIn, FaFacebook, FaGoogle } from 'react-icons/fa';

const email = "huynq.forwork@gmail.com";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/QHuyyyyy" },
    { icon: <FaLinkedinIn />, path: "https:/www.linkedin.com/in/huyquoc1209" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/huyquoc.1209/" },
    {
        icon: <FaGoogle />,
        path: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
    },
];

export default function Social({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <a
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className={iconStyles}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
