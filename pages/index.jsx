import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ScrollDownArrow from '../components/ScrollDown'
import UnstyledLink from '../components/UnstyledLink'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hult Prize at Institut Teknologi Sepuluh Nopember</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
      <main className='overflow-hidden'>
        <section id='home' className={`relative ${styles.firstSection}`}>
          <article className={`flex justify-center px-10 md:px-24 flex-col items-left gap-8 text-white py-6 md:py-12 md:gap-12 ${styles.minScreenHeader} layout`}>
            <div>
              <div className='flex flex-col'>
                <img src='/logo-1.png' className='w-56 self-center sm:self-start select-none sm:w-56 md:w-64 lg:w-80 h-auto' />  
              </div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl mb-5 mt-3 md:mt-6 font-bold text-center sm:text-left'>WIN THE MOST PRESTIGIOUS<br />BUSINESS IDEA COMPETITION!</h1>
              <p className={`text-xl text-center sm:text-left md:text-2xl ${styles.firstP}`}>For ITS students of <span className='font-bold'>ALL</span> study programs & batches</p>
            </div>
            <div className='mt-1 md:-mt-4'>
              <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                <UnstyledLink href='#' className={`px-5 self-center text-lg sm:self-start rounded-lg py-1 ${styles.firstBtn}`}>Register Your Team!</UnstyledLink>
                <UnstyledLink href='#' className={`px-3 self-center text-lg sm:self-start rounded-lg py-1 ${styles.secondBtn}`}>Submit Your Abstract!</UnstyledLink>
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
          <article className='relative flex justify-center px-10 lg:px-28 flex-col items-left gap-8 text-white py-14 md:gap-12 min-h-screen layout'>
            <img className={`w-64 select-none ${styles.floatAnim1} h-auto right-0 -bottom-32 absolute`} src='/ellipse1.png' alt='' />
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-1/2'>
                <div>
                  <h1 className='text-2xl md:text-3xl mb-5 text-left'>THE 2022 CHALLENGE<br /><span className='font-bold text-4xl md:truncate md:text-5xl'>LOREM IPSUM D</span></h1>
                  <p className='text-lg md:text-xl leading-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                </div>
                <div className='z-10 w-full flex flex-col mt-10'>
                  <UnstyledLink href='#' className={`self-center sm:self-start text-lg rounded-lg px-7 py-2 md:text-xl ${styles.thirdBtn}`}>Join the Community!</UnstyledLink>
                </div>
              </div>
              <div className='top-10 lg:pl-5 md:w-1/2 self-center relative'>
                <div className={styles.rectangle1}>
                  <img src="/youtube.png" className='h-auto m-auto' alt="youtube placeholder" />
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id='timeline' className={`relative ${styles.thirdSection}`}>
          <div className={`w-16 md:w-20 h-full absolute z-10 ${styles.left}`}></div>
          <div className={`w-16 md:w-20 h-full right-0 z-10 absolute ${styles.right}`}></div>
          <article className='flex flex-col justify-center items-left gap-2 text-white md:gap-24 min-h-screen layout'>
              <div className='pl-10 relative md:pl-28'>
                <h1 className='font-bold absolute -top-28 text-3xl md:text-4xl text-left'>PROGRAM<br />TIMELINE</h1>
                <div className='flex relative' style={{width: '1300px'}}>
                  <div className={`relative ${styles.box1}`}>
                    <h1 className='relative text-black left-5 top-3 font-bold text-3xl'>00 - 00<br/>September</h1>
                    <h1 className='absolute bottom-3 text-xl right-5 text-right text-black font-semibold'>Preliminary<br/><span className='text-3xl font-bold'>Abstract Submission</span></h1>
                  </div>
                  <div className={`relative ${styles.box2}`}>
                    <h1 className='relative left-5 top-3 font-semibold text-3xl'>00 - 00<br/>October</h1>
                    <h1 className='absolute bottom-3 text-xl right-5 text-right font-semibold'>Semi Final<br/><span className='text-3xl font-bold'>Video Pitching Presentation</span></h1>
                  </div>
                  <div className={`relative w-80 ${styles.box2}`}>
                    <h1 className='relative left-5 top-3 font-semibold text-3xl'>00 - 00<br/>November</h1>
                    <h1 className='absolute bottom-3 text-xl right-5 text-right font-semibold'>Road to Final<br/><span className='text-3xl font-bold'>Incubation Program</span></h1>
                  </div>
                  <div className={`relative w-80 ${styles.box2}`}>
                    <h1 className='relative left-5 top-3 font-semibold text-3xl'>4 December</h1>
                    <h1 className='absolute bottom-3 text-xl right-5 text-right font-semibold'>Final<br/><span className='text-3xl font-bold'>Award Ceremony & Gala</span></h1>
                  </div>
                  <div className={styles.horizontal}></div>
                </div>
                <div className='absolute flex flex-row justify-center w-full left-0 -bottom-24'>
                  <UnstyledLink href='#' className={`text-xl font-semibold rounded-lg px-4 py-2 ${styles.fourthBtn}`}>Competition Guideline</UnstyledLink>
                </div>
              </div>
          </article>          
        </section>
        <section id='register' className={styles.fourthSection}>
          <article className='relative flex lg:flex-row justify-between px-0 flex-col lg:items-center text-black lg:h-screen layout'>
            <div className='py-20 flex flex-col w-full lg:w-1/2 lg:py-0'>
              <div className='self-center w-80'>
                <h1 className='text-lg text-left'>Elevate your experience by joining the</h1>
                <img className='mt-2 select-none -ml-1 w-80 h-auto' src='/impact.png' alt='impact community' />
                <p className='text-lg sm:w-80 leading-6'>A platform for ITS students who are highly motivated in making an impact.</p>
                <div className='flex mt-7 w-full'>
                  <UnstyledLink href='#' className={`${styles.fifthBtn} rounded-lg px-5 py-2`}>Join the Community!</UnstyledLink>
                </div>
              </div>
            </div>
            <div className='h-auto lg:h-full w-full lg:w-auto'>
              <img className='w-auto relative lg:absolute select-none right-0 h-full' src='/poster1.png' alt='hultprize at its poster' />
            </div>
          </article>
        </section>
        <section id='about' className={styles.fifthSection}>
          <article
            style={{
              backgroundImage: 'url(/building-bg.png)',
              backgroundRepeat: 'no-repeat',
            }}
            className='bg-cover bg-center relative flex px-0 flex-col justify-center items-left gap-8 text-white md:gap-12 py-10 sm:py-0 min-h-screen layout'
          >
            <div className='flex relative'>
              <div className='px-4 md:px-28'>
                <div>
                  <div className='flex'>
                    <h1 className='text-4xl text-left uppercase'>About<br /></h1>
                    <div className={styles.line1}></div>
                  </div>
                  <h1 className='text-5xl font-bold text-left uppercase'>HULT PRIZE AT ITS</h1>
                  <p className='text-lg md:w-5/6 mt-7 leading-6'>Hult Prize at ITS is part of the OnCampus Program of Hult Prize where ITS students (of ALL study programs) are given the chance to tackle the world's problems in the form of a startup competition. You will get to ideate your own business for a better world (in accordance to the case given) and receive exclusive training and incubation from professionals to develop it.</p>
                </div>
                <div className='mt-7 gap-10'>
                  <p className='mb-5 text-lg'>Spread the word about Hult Prize at ITS!</p>
                  <div className='flex flex-col md:flex-row gap-6'>
                    <UnstyledLink href='#' className={`self-start rounded-lg px-5 py-1 ${styles.fifthBtn}`}>Download the video</UnstyledLink>
                    <p className='md:mt-3'>..and share on your Instagram story!</p>
                  </div>
                </div>
              </div>
              <div className='w-1/2 relative'></div>
            </div>
          </article>
        </section>
        <div className='flex flex-col h-64 w-full' style={{backgroundColor: '#E5E5E5',}}>
          <div className={styles.footer1}>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center'>ARE YOU READY TO #CreateTheChange?</h1>
          </div>
          <div className={styles.footer2}>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>Stay Connected!</h1>
            <div className={styles.connect}>
              <UnstyledLink href='#' ><img className='select-none' src='/instagram.png'/></UnstyledLink>
              <UnstyledLink href='#' ><img className='select-none' src='/linkedin.png'/></UnstyledLink>
              <UnstyledLink href='#' ><img className='select-none' src='/mail.png'/></UnstyledLink>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
