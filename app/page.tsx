import React from 'react';
import Image from 'next/image';
import { Boxes, AuroraBackground, EvervaultCard, SocialButtons, FollowerPointerCard } from '@/components';
import '@/app/globals.css';
import Head from 'next/head';
import ButtonSos from '@/components/ui/ButtonSos';


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
