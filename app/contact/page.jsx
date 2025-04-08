"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const info = [
    { icon: <FaPhoneAlt />, title: "Phone", content: "+84 123456789" },
    { icon: <FaEnvelope />, title: "Email", content: "huynq.forwork@gmail.com" },
    { icon: <FaMapMarkedAlt />, title: "Address", content: "Vinhomes Grand Park, District 9" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceChange = (value) => {
        setFormData(prev => ({
            ...prev,
            service: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                'service_5fuddzl',
                'template_jxinxmj', // Template cho người dùng
                {
                    email: formData.email,
                    to_name: `${formData.firstName} ${formData.lastName}`,
                    from_name: "Huy Nguyen",
                    service: formData.service,
                    message: formData.message,
                },
                'JcpTT6QENUiL2WsvB'
            );
    
            // Gửi email thông báo cho admin
            await emailjs.send(
                'service_5fuddzl',
                'template_rfux0jr', // Tạo template mới cho admin
                {
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                },
                'JcpTT6QENUiL2WsvB'
            );

            toast.success('Message sent successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        } catch (error) {
            toast.error('Failed to send message. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.section
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeIn", delay: 1 }
            }}
        >
            <ToastContainer />
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                <br /> Whether you have a question or just want to say hi, feel free to reach out.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input 
                                    type="text" 
                                    name="firstName"
                                    placeholder="Your First Name" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <Input 
                                    type="text"
                                    name="lastName" 
                                    placeholder="Your Last Name" 
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                                <Input 
                                    type="email"
                                    name="email" 
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input 
                                    type="tel"
                                    name="phone" 
                                    placeholder="Your Phone Number" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Select 
                                value={formData.service}
                                onValueChange={handleServiceChange}
                                required
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-[#27272c] text-white border border-gray-600 rounded-lg">
                                    <SelectGroup>
                                        <SelectLabel className="text-white/60">Select a service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                                        <SelectItem value="SEO">SEO</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea 
                                name="message"
                                placeholder="Your Message" 
                                className="h-[200px]"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <Button 
                                type="submit" 
                                className="w-full bg-accent hover:bg-accent/90 text-white"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="text-accent rounded-md flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className=" text-white/60">{item.title}</h3>
                                        <p className="text-xl">{item.content}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
