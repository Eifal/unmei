import React from 'react';
import { AuroraBackground, EvervaultCard, SocialButtons, FollowerPointerCard, HeroParallax } from '@/components';
import '@/app/globals.css';

export default function Home() {
  return (
    <AuroraBackground className='bg-black'>
    <div className='body-box'>
    <FollowerPointerCard profileImageUrl='/unmei1.webp' >
      <div className='centered-box'>
        <EvervaultCard className='text-shadow' text='Eifal-運命' imageUrl='/unmei1.webp'>
        </EvervaultCard>
      </div>
      <div className='spacing'>
        <SocialButtons />
      </div>
      </FollowerPointerCard>
    </div>
    </AuroraBackground>
  );
}
