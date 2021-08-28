import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import ScrollDownArrow from '../components/ScrollDown';
import UnstyledLink from '../components/UnstyledLink';
import ImageSlider from '../components/Slider';
import Navbar from '../components/Navbar/Navbar';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  let { t } = useTranslation()

  return (
    <div>
      <div className='fixed z-50 w-full'>
        <Navbar />
      </div>
      <Head>
        <title>Hult Prize at Institut Teknologi Sepuluh Nopember</title>
        <meta name='keywords' content='hultprizeatits' />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      </Head>
      <main className='overflow-hidden'>
        <section id='home' className={`relative ${styles.firstSection}`}>
          <article className={`flex justify-center pt-16 px-10 md:px-24 flex-col items-left gap-8 text-white py-6 md:pt-12 md:gap-12 min-h-screen layout`}>
            <div>
              <div className={`flex flex-col ${styles.anim1}`}>
                <img alt='' src='/logo-1.png' className='self-center w-56 h-auto select-none sm:self-start sm:w-56 md:w-64 lg:w-80' />  
              </div>
              <h1 className={`mt-3 ${styles.anim2} mb-5 text-3xl font-bold text-center md:text-4xl lg:text-5xl md:mt-6 sm:text-left`}>{t("common:title1")}<br />{t("common:title2")}</h1>
              <p className={`text-xl ${styles.anim3} text-center sm:text-left md:text-2xl ${styles.firstP}`}>{t('common:subtitle1')} <span className='font-bold'>{t('common:subtitle2')}</span> {t('common:subtitle3')}</p>
            </div>
            <div className={`mt-1 md:-mt-4 ${styles.anim4}`}>
              <div className='flex flex-col gap-4 md:flex-row md:gap-10'>
                <a href='https://bit.ly/HPITS_RegisterTeam' className={`${t('common:register-button') === 'Register Your Team!' ? 'px-8' : 'px-7'} truncate ${styles.firstBtn} transition duration-100 self-center text-lg text-black sm:self-start rounded-lg py-1`}>{t('common:register-button')}</a>
                <a href='https://bit.ly/HPITS_SubmitAbstract' className={`text-lg truncate ${styles.secondBtn} ${t('common:submit-button') === 'Kumpulkan Abstrak!' ? 'px-12' : 'px-6'} rounded-lg border-2 self-center sm:self-start py-1 bg-black text-white`}>{t('common:submit-button')}</a>
              </div>
            </div>
          </article>
          <div className={`absolute bottom-3 ${styles.center}`}>
            <ScrollDownArrow />
          </div>
        </section>
        <section className={styles.secondSection}>
          <div className='relative'>
            <img className={`w-52 select-none -z-1 h-auto ${styles.floatAnim2} mt-5 absolute`} src='/ellipse2.png' alt='' />
          </div>
          <article className='relative flex flex-col justify-center min-h-screen gap-8 px-10 py-20 text-white lg:px-28 items-left md:gap-12 layout'>
            <img className={`w-64 select-none ${styles.floatAnim1} h-auto right-0 -bottom-32 absolute`} src='/ellipse1.png' alt='' />
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-1/2'>
                <div>
                  <h1 data-aos='fade-right' className='mb-5 text-2xl text-left md:text-3xl'>{t('common:challenge-title')}<br /><span className='text-4xl font-bold md:text-5xl'>{t('common:challenge-title1')}</span></h1>
                  <div data-aos='fade-right'>
                    <p className='text-lg leading-6 md:text-xl'>
                      {t('common:challenge-text')}
                    </p>
                    <div className='z-20 flex flex-col w-full mt-10'>
                      <a href='https://bit.ly/HPITS_ChallengeGuide' className={`self-center truncate sm:self-start text-lg rounded-lg px-7 py-2 md:text-xl ${styles.thirdBtn}`}>{t('common:join-guidebook-button')}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos='fade-left' className='relative self-center top-7 lg:top-0 lg:pl-5 md:w-1/2'>
                <div className={`${styles.rectangle1} rounded-lg px-2 py-2`}>
                  <img src="/youtube.png" className='h-auto m-auto' alt="youtube placeholder" />
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id='timeline' className={`relative flex flex-col justify-center align-center w-full ${styles.thirdSection} min-h-screen`}>
          <div className={`w-16 pl-6 flex flex-col justify-center align-center md:w-20 h-full absolute z-20 ${styles.left}`}>
            
          </div>
          <div className={`w-16 pl-6 flex flex-col align-center justify-center md:w-20 h-full right-0 z-20 absolute ${styles.right}`}>
            
          </div>
          <h1 data-aos='fade-up' className='relative text-3xl font-bold text-white uppercase sm:text-4xl top-20 left-10 sm:left-20'>{t('common:timeline-title1')}<br />{t('common:timeline-title2')}</h1>
          <div data-aos='fade-right'>
            <div className='relative' style={{width: '100vw'}}>
              <div className={`px-10 py-32 carousel sm:px-16 align-center`} style={{maxWidth: '1300px'}}>
                <ImageSlider />
              </div>
              <div className={`left-32 relative bottom-80 ${styles.horizontal}`}></div>
            </div>
            <div className='relative left-0 z-30 flex flex-row justify-center w-full bottom-16'>
              <UnstyledLink href='https://bit.ly/HPITS_CompGuide' className={`text-xl transform duration-150 hover:scale-110 truncate font-semibold rounded-lg px-4 py-2 ${styles.fourthBtn}`}>{t('common:competition-guidebook')}</UnstyledLink>
            </div>
          </div>
        </section>
        <section id='register' className={styles.fourthSection}>
          <article className='relative flex flex-col justify-between px-0 text-black lg:flex-row lg:items-center lg:h-screen layout'>
            <div className='flex flex-col self-center justify-center py-20 lg:w-1/2 lg:py-0'>
              <div className='flex flex-col self-center justify-center px-0 w-80 sm:w-auto sm:px-8 lg:px-0 '>
                <div data-aos='fade-right' className='flex flex-col'>
                  <h1 className='mb-3 text-lg sm:truncate sm:text-xl'>{t('common:impact-upper')}<br />{t('common:impact-upper1')}</h1>
                  <div className={`self-center sm:self-start ${styles.boxed}`}>
                    <div className='flex gap-3'>
                      <h1 className='text-4xl font-bold sm:text-5xl'>IMPACT</h1>
                      <div className={`${styles.boxDecoration} mt-2 w-full h-7 sm:h-10`}></div>
                    </div>
                    <div className='flex gap-3'>
                      <div className={`${styles.boxDecoration} mt-2 w-full h-7 sm:h-10`}></div>
                      <h1 className='text-4xl font-bold sm:text-5xl'>COMMUNITY</h1>
                    </div>
                  </div>
                </div>
                <div data-aos='fade-right'>
                  <p className='mt-5 text-lg leading-7 sm:w-80'>{t('common:impact-lower')}</p>
                  <div className='flex w-full mt-12'>
                    <a href='https://bit.ly/HPITS_ImpactComm' className={`${styles.fifthBtn} truncate rounded-lg px-5 py-2`}>{t('common:join-button')}</a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos='fade-left' className='flex flex-col w-full h-full lg:h-full lg:w-1/2'>
              <div className='flex flex-row' style={{height: '15vh'}}>
                <div className="relative flex w-1/3 overflow-hidden">
                  <img className='top-0 left-0 object-cover w-full select-none' src="/hultprize1.jpg" alt="hultprize1" />
                </div>
                <div className='w-2/3' style={{background: '#790E48'}}></div>
              </div>
              <div className="flex" style={{height: '25vh'}}>
                <div className='flex justify-center w-1/3 px-4 py-8 overflow-hidden align-center'>
                  <img src="/what.png" alt="what will you get" className='object-scale-down h-full select-none' />  
                </div>
                <div className='relative flex justify-center w-2/3 overflow-hidden align-center'>
                  <img className='object-cover w-full select-none ' src="/hultprize2.png" alt="hultprize 2" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-4 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: 'linear-gradient(270deg, rgba(219, 10, 127, 0) 1.02%, #BF1D76 100%)'}}>
                    <h1 style={{lineHeight: '18px'}} className='text-xs sm:text-base'>Network with like-minded<br />individuals</h1>
                  </div>
                </div>
              </div>
              <div className="flex" style={{height: '30vh'}}> 
                <div className="relative flex justify-center w-1/2 overflow-hidden sm:w-2/5 align-center">
                  <img className='object-cover w-full select-none ' src="hultprize3.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: '#C11873'}}>
                    <h1 style={{lineHeight: '18px'}} className='text-xs sm:text-md xl:text-base'>Create your dream team through pairing service</h1>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/2 sm:w-3/5 overlow-hidden align-center">
                  <img className='object-cover w-full select-none' src="hultprize4.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: 'linear-gradient(90deg, rgba(230, 92, 168, 0) 0%, #E65CA8 100%)'}}>
                    <h1 style={{lineHeight: '18px'}} className='text-xs leading-4 text-right sm:text-base'>Get information on<br />Hult Prize at ITS faster</h1>
                  </div>
                </div>
              </div>
              <div className="flex" style={{height: '30vh'}}>
                <div className="relative flex justify-center w-1/2 overflow-hidden align-center">
                  <img className='object-cover w-full select-none ' src="hultprize5.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: 'linear-gradient(269.93deg, rgba(219, 10, 127, 0) 0.09%, #BF1D76 99.96%)'}}>
                    <h1 className='text-xs leading-5 sm:text-base'>Exclusive Q&A session</h1>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/2 overflow-hidden align-center">
                  <img className='object-cover w-full select-none' src="hultprize6.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: '#BF1D76'}}>
                    <h1 className='text-xs leading-5 text-right sm:text-base'>Exclusive workshop</h1>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id='about' className={styles.fifthSection}>
          <article
            style={{
              backgroundImage: 'url(/building-bg.png)',
              backgroundRepeat: 'no-repeat',
            }}
            className='relative flex flex-col justify-center min-h-screen gap-8 px-0 py-10 text-white bg-center bg-cover items-left md:gap-12 sm:py-0 layout'
          >
            <div className='relative flex'>
              <div className='px-4 md:px-28'>
                <div data-aos='fade-right'>
                  <div className='flex'>
                    <h1 className='text-4xl text-left uppercase'>{t('common:about-us')}<br /></h1>
                    <div className={`${styles.line1}`}></div>
                  </div>
                  <h1 className='text-5xl font-bold text-left uppercase'>HULT PRIZE AT ITS</h1>
                  <p className='text-lg leading-6 md:w-5/6 mt-7'>{t('common:about-text')}</p>
                </div>
                <div data-aos='fade-up' className='gap-10 mt-7'>
                  <p className='mb-5 text-lg'>{t('common:about-lower')}</p>
                  <div className='flex flex-col gap-6 md:flex-row'>
                    <a href='https://bit.ly/SpreadTheChange' className={`self-start truncate rounded-lg px-5 py-1 ${styles.fifthBtn}`}>{t('common:download-video')}</a>
                    <p className='md:mt-3'>{t('common:download-video-inline')}</p>
                  </div>
                </div>
              </div>
              <div className='relative w-1/2'></div>
            </div>
          </article>
        </section>
        <div className='flex flex-col w-full h-64' style={{backgroundColor: '#E5E5E5',}}>
          <div className={styles.footer1}>
            <h1 data-aos='fade-zoom-in' className='text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl lg:text-4xl'>ARE YOU READY TO #CreateTheChange?</h1>
          </div>
          <div data-aos='fade-zoom-in' className={styles.footer2}>
            <h1 className='-mb-2 text-2xl font-bold text-center md:text-3xl'>Stay Connected!</h1>
            <div className={`${styles.connect}`}>
              <UnstyledLink href='https://www.instagram.com/hultprize_its/' ><img alt='' className='duration-200 transform select-none hover:scale-125' src='/instagram.png'/></UnstyledLink>
              <UnstyledLink href='https://www.linkedin.com/company/hult-prize-at-its' ><img alt='' className='duration-200 transform select-none hover:scale-125' src='/linkedin.png'/></UnstyledLink>
              <UnstyledLink href='mailto:hultprize@its.ac.id' ><img alt='' className='duration-200 transform select-none hover:scale-125' src='/mail.png'/></UnstyledLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}