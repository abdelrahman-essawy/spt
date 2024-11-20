import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { fetchClient } from '../../fetch-client';
import EnvatoSvg from './assets/envato.svg';
import StarSvg from './assets/star.svg';
import AddressSvg from './assets/address.svg';
import BranchesSvg from './assets/branches.svg';
import OrdersSvg from './assets/orders.svg';
import ServicesSvg from './assets/services.svg';
import YesSvg from './assets/yes.svg';
import { IProvider } from './types';
import { Divider } from '@nextui-org/divider';
import { useTranslations } from 'next-intl';
import { Breadcrumbs } from '../../ui/breadcrumbs';
import { PrimaryLink } from '../../ui/primary-button';
import { GoogleMap } from './map';

export const ShowProviderPage = async ({ id }: { id: string }) => {
  const { data } = (await fetchClient.GET('/provider/{id}', {
    params: {
      path: { id },
    },
  })) as { data: { data: IProvider } };

  const provider = data?.data;

  return (
    <div className={'px-4 py-4'}>
      <div className={'pb-4'}>
        <Breadcrumbs type={provider?.services} id={id} />
      </div>
      <div className={'flex flex-col gap-8'}>
        <ProviderDetailsCard provider={provider} />
        <ProviderLocation location={provider.location} />
        <ProviderFAQ provider={provider} />
        <OrderButton />
      </div>
    </div>
  );
};

const OrderButton = () => {
  const t = useTranslations();
  return <PrimaryLink href={'/'} text={t('order_service')} />;
};

const ProviderLocation = ({
  location,
}: {
  location: { lat: number; lng: number };
}) => {
  const t = useTranslations('ProviderLocation');
  return (
    <div className={'flex flex-col gap-4'}>
      <h2 className={'text-xl font-semibold'}>{t('location')}</h2>
      <GoogleMap position={location} />
    </div>
  );
};

const ProviderDetailsCard = ({ provider }: { provider: IProvider }) => {
  const t = useTranslations('ProviderDetailsCard');
  const details = [
    {
      icon: AddressSvg,
      label: t('address'),
      value: provider.address,
    },
    {
      icon: ServicesSvg,
      label: t('services'),
      value: t(provider?.services),
    },
    {
      icon: OrdersSvg,
      label: t('total_completed_orders'),
      value: provider.total_completed_orders,
    },
    {
      icon: BranchesSvg,
      label: t('branches'),
      value: provider.branches,
    },
  ];

  return (
    <Card shadow={'sm'} className={'p-2'}>
      <CardHeader>
        <div className={'flex items-center gap-4'}>
          <div className={'rounded-full bg-gray-200 w-12 h-12 relative'}>
            <Image src={EnvatoSvg} alt="Envato" fill={true} className={'p-3'} />
          </div>
          <div className={'flex flex-col'}>
            <h2 className={'text-[#05b5b4] font-semibold text-lg'}>
              {provider.name}
            </h2>
            <div className={'flex items-center gap-1'}>
              <p className={'text-gray-500 text-sm font-bold'}>
                {provider.rate}
              </p>
              <Image src={StarSvg} alt="Star" className={'h-3.5 w-3.5'} />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className={'mt-2'}>
        <div className={'flex flex-col gap-2'}>
          {details.map(({ icon, label, value }, index) => (
            <div key={label} className={'flex flex-col gap-2'}>
              <div className={'flex items-center justify-between'}>
                <div className={'flex items-center gap-3'}>
                  <Image src={icon} alt="Address" className={'h-6 w-6'} />
                  <p className={'text-gray-700'}>{label}</p>
                </div>
                <p className={'text-gray-700 font-semibold'}>{value}</p>
              </div>
              {index !== details.length - 1 && (
                <Divider
                  style={{
                    borderStyle: 'dashed',
                  }}
                  className="my-2 bg-gray-100"
                />
              )}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

const ProviderFAQ = ({ provider }: { provider: IProvider }) => {
  const t = useTranslations('ProviderFAQ');

  const FAQ = [
    {
      icon: AddressSvg,
      label: t('q1'),
      value: provider.is_delivery_available,
    },
    {
      icon: ServicesSvg,
      label: t('q2'),
      value: provider.is_voice_call_available,
    },
    {
      icon: OrdersSvg,
      label: t('q3'),
      value: provider.is_video_call_available,
    },
  ];

  return (
    <div className={'flex flex-col gap-2'}>
      {FAQ.map(({ icon, label, value }, index) => (
        <div key={label} className={'flex flex-col gap-2'}>
          <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-3'}>
              <Image src={icon} alt="Address" className={'h-6 w-6'} />
              <p className={'text-gray-700'}>{label}</p>
            </div>
            <p className={'text-gray-700 font-semibold'}>
              {value ? (
                <Image src={YesSvg} alt="Yes" className={'h-6 w-6'} />
              ) : (
                'No'
              )}
            </p>
          </div>
          {index !== FAQ.length - 1 && (
            <Divider
              style={{
                borderStyle: 'dashed',
              }}
              className="my-2 bg-gray-100"
            />
          )}
        </div>
      ))}
    </div>
  );
};
