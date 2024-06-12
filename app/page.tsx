import React from 'react';
import Image from 'next/image';
import { Boxes, AuroraBackground, EvervaultCard, SocialButtons } from '@/components';
import '@/app/globals.css';
import Head from 'next/head';

export default function Home() {
  return (
    <AuroraBackground className='bg-black'>
    <div className='body-box'>
      <div className="centered-box">
        <EvervaultCard className='text-shadow' text='Eifal-運命' imageUrl='/unmei.png'>
        </EvervaultCard>
      </div>
      <div className='spacing'>
        <SocialButtons />
      </div>
    </div>
    </AuroraBackground>
  );
}
