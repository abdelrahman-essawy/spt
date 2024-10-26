'use client';

import * as React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useTranslations } from 'next-intl';
import { Carousel } from '@spt/common';
import { HomeSection } from '../home/home-section';
import { ReviewCard } from './review-card';
import { UseReviews } from './use-reviews';
import { OfferCardSkeleton } from '../offers/offer-card';

export const ReviewsSection = () => {
  const t = useTranslations('home');
  const { reviews, isLoading } = UseReviews();

  return (
    <HomeSection title={t('reviews')} className={'h-[calc(24rem+3.5rem)]'}>
      <div className={'relative'}>
        <div className="absolute inset-0">
          {isLoading ? (
            <OffersSkeleton />
          ) : (
            <Carousel>
              {reviews.map((review) => (
                <SwiperSlide
                  key={review.id}
                  className={'!w-auto mb-14 !overflow-visible m-1'}
                >
                  <ReviewCard {...review} />
                </SwiperSlide>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </HomeSection>
  );
};

const OffersSkeleton = () => (
  <div className={'absolute overflow-hidden w-full lg:w-auto'}>
    <div className={'hidden lg:flex justify-center align-middle mx-auto'}>
      {Array.from({ length: 10 }).map((_, index) => (
        <OfferCardSkeleton key={index} />
      ))}
    </div>
    <div className={'lg:hidden flex justify-center align-middle mx-auto'}>
      <OfferCardSkeleton />
    </div>
  </div>
);
