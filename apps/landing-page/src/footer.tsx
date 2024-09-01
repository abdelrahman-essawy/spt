import Image from 'next/image';
import Logo from './assets/svg/logo-white.svg';
import FooterBg from './assets/svg/footer-bg.svg';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from '@nextui-org/link';
import { cn } from '@nextui-org/theme';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';

export const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', href: '#' },
    { icon: <FaTwitter />, name: 'Twitter', href: '#' },
    { icon: <FaInstagram />, name: 'Instagram', href: '#' },
    { icon: <FaLinkedin />, name: 'Linkedin', href: '#' },
  ];

  const firstSection = [
    {
      title: 'عن SPT',
      links: [
        { label: 'حول المنصة', href: '#' },
        { label: 'السياسيات و الاستراتيجيات', href: '#' },
        { label: 'الاخبار', href: '#' },
        { label: 'خدمه العملاء', href: '#' },
      ],
    },
  ];

  const secondSection = [
    {
      title: 'الدعم و المساعدة',
      links: [
        { label: 'تواصل معنا', href: '#' },
        { label: 'تقديم شكوى', href: '#' },
        { label: 'سهوله الوصول', href: '#' },
      ],
    },
  ];

  const contactInfo = {
    title: 'تواصل معنا',
    address: 'المملكة العربية السعودية - مكه',
    phone: '333-333-3333',
    email: 'spt@mail.com',
  };

  return (
    <footer className="text-white mt-16 relative bg-[#001E5F] p-8 lg:p-10">
      <Image
        src={FooterBg}
        alt="Footer Background"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 z-10 md:place-items-center space-y-4">
        {/*<div className="col-span-1 md:col-span-2 flex flex-col gap-8 text-center items-center">*/}
        <div
          className={cn(
            'text-white',
            'col-span-1 flex flex-col gap-8 text-center items-center',
            'md:text-right md:items-start',
            'col-span-2'
          )}
        >
          <Image src={Logo} alt="Logo" className="w-[86px] md:w-[120px]" />
          <p className="text-xs opacity-80">
            في SPT ، نقدم لك أكثر من مجرد قطع غيار سيارات. نقدم لك تجربة شاملة
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-[#1f3972] p-2 rounded-full *:fill-gray-200"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-right col-span-1 md:col-span-2">
          {firstSection.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="list-disc list-inside">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      color="secondary"
                      className="text-xs"
                      key={index}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 text-right col-span-1 md:col-span-2">
          {secondSection.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="list-disc list-inside">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      color="secondary"
                      className="text-xs"
                      key={index}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 text-right text-xs col-span-2">
          <h4 className="text-lg font-bold">{contactInfo.title}</h4>
          <p className="flex gap-2">
            <IoLocationOutline />
            {contactInfo.address}
          </p>
          <p className="flex gap-2">
            <LuPhone />
            {contactInfo.phone}
          </p>
          <p className="flex gap-2">
            <CiMail />
            {contactInfo.email}
          </p>
        </div>
      </div>

      {/*  divider */}
      <div className="bg-[#1f3972] h-0.5 my-8"></div>
      <p className="text-xs text-center opacity-80">
        {`جميع الحقوق محفوظة © ${new Date().getFullYear()} SPT.`}
      </p>
    </footer>
  );
};
