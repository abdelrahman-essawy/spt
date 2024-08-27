import { Section } from '../components/section';
import Image from 'next/image';
import Service1Bg from '../assets/svg/services/service-1-bg.svg';
import Service2Bg from '../assets/svg/services/service-2-bg.svg';
import Service1Icon from '../assets/svg/services/service-1-icon.svg';
import Service2Icon from '../assets/svg/services/service-2-icon.svg';
import { HTMLProps, ReactNode } from 'react';
import { cn } from '@nextui-org/theme';
import { SecondButton } from '../components/second-button';

export const ServicesSection = () => {
  return (
    <Section title={'خدماتنا'} heading={'ماذا يمكن أن نقدم لك'}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 lg:mt-8 lg:gap-8">
        <div className="col-span-2">
          <ServiceCard
            title="التوصيل"
            description="هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!"
            icon={Service1Icon}
            theme={'light'}
            button={<SecondButton color={'primary'} text={'اطلب الآن'} />}
            bg={
              <Image
                src={Service1Bg}
                className="left-0 absolute w-1/2  fill-black"
                alt="Service 1 Icon"
              />
            }
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <ServiceCard
            title="بيع سيارات تشليح"
            description="هل تبحث عن قطع غيار موثوقة وبأسعار مناسبة لسيارتك؟ مع تطبيق SPT، يمكنك الآن العثور على كل ما تحتاجه لتصليح وصيانة سيارتك بلمسة واحدة!"
            icon={Service2Icon}
            bg={
              <Image
                src={Service2Bg}
                className="left-0 -bottom-20 absolute fill-black"
                alt="Service 1 Icon"
              />
            }
            className="bg-primary text-white"
            button={<SecondButton color={'secondary'} text={'اطلب الآن'} />}
            theme="dark"
          />
        </div>
      </div>
    </Section>
  );
};

const ServiceCard = (
  props: HTMLProps<any> & {
    title: string;
    description: string;
    icon: string;
    button: ReactNode;
    bg: ReactNode;
    theme: 'light' | 'dark';
  }
) => {
  const { title, description, icon, bg } = props;
  return (
    <div
      {...props}
      className={cn(
        'bg-secondary rounded-3xl h-72 relative overflow-hidden',
        props.className
      )}
    >
      {bg}
      <div className="flex flex-col gap-4 p-6">
        <Image src={icon} alt="Service 1" />
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p
          className={cn(
            'text-md max-w-sm',
            props.theme === 'light' ? 'text-secondaryText' : 'text-white'
          )}
        >
          {description}
        </p>
        {props.button}
      </div>
    </div>
  );
};
