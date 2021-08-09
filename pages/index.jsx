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
                <img src='/logo-1.png' className='self-center w-56 h-auto select-none sm:self-start sm:w-56 md:w-64 lg:w-80' />  
              </div>
              <h1 className='mt-3 mb-5 text-3xl font-bold text-center md:text-4xl lg:text-5xl md:mt-6 sm:text-left'>WIN THE MOST PRESTIGIOUS<br />BUSINESS IDEA COMPETITION!</h1>
              <p className={`text-xl text-center sm:text-left md:text-2xl ${styles.firstP}`}>For ITS students of <span className='font-bold'>ALL</span> study programs & batches</p>
            </div>
            <div className='mt-1 md:-mt-4'>
              <div className='flex flex-col gap-4 md:flex-row md:gap-10'>
                <UnstyledLink href='#' className={`px-8 self-center text-lg sm:self-start rounded-lg py-1 ${styles.firstBtn}`}>Register Your Team!</UnstyledLink>
                <UnstyledLink href='#' className={`text-lg px-6 rounded-lg border-2 ${styles.secondBtn} self-center sm:self-start py-1 rounded-lg bg-black text-white`}>Submit Your Abstract!</UnstyledLink>
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
          <article className='relative flex flex-col justify-center min-h-screen gap-8 px-10 text-white lg:px-28 items-left py-14 md:gap-12 layout'>
            <img className={`w-64 select-none ${styles.floatAnim1} h-auto right-0 -bottom-32 absolute`} src='/ellipse1.png' alt='' />
            <div className='flex flex-col lg:flex-row'>
              <div className='lg:w-1/2'>
                <div>
                  <h1 className='mb-5 text-2xl text-left md:text-3xl'>THE 2022 CHALLENGE<br /><span className='text-4xl font-bold md:truncate md:text-5xl'>LOREM IPSUM D</span></h1>
                  <p className='text-lg leading-6 md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                </div>
                <div className='z-10 flex flex-col w-full mt-10'>
                  <UnstyledLink href='#' className={`self-center sm:self-start text-lg rounded-lg px-7 py-2 md:text-xl ${styles.thirdBtn}`}>Join the Community!</UnstyledLink>
                </div>
              </div>
              <div className='relative self-center top-7 lg:top-0 lg:pl-5 md:w-1/2'>
                <div className={`${styles.rectangle1} rounded-lg px-2 py-2`}>
                  <img src="/youtube.png" className='h-auto m-auto' alt="youtube placeholder" />
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id='timeline' className={`relative ${styles.thirdSection}`}>
          <div className={`w-16 md:w-20 h-full absolute z-20 ${styles.left}`}></div>
          <div className={`w-16 md:w-20 h-full right-0 z-20 absolute ${styles.right}`}></div>
          <article className='flex flex-col justify-center min-h-screen gap-2 text-white items-left md:gap-24 layout'>
              <div className='relative pl-10 md:pl-28'>
                <h1 className='absolute text-3xl font-bold text-left -top-24 md:text-4xl'>PROGRAM<br />TIMELINE</h1>
                <div className='relative flex' style={{width: '1300px'}}>
                  <div className={`px-1 mr-12 rounded-lg ${styles.background2} py-1 bg-black z-10`}>
                    <div className={`relative ${styles.box1}`}>
                      <h1 className='relative text-3xl font-bold text-black left-5 top-3'>OO - OO<br/>September</h1>
                      <h1 className='absolute text-xl font-semibold text-right text-black bottom-3 right-5'>Preliminary<br/><span className='text-3xl font-bold'>Abstract Submission</span></h1>
                    </div>
                  </div>
                  <div className={`px-1 mr-12 rounded-lg ${styles.background1} py-1 bg-black z-10`}>
                    <div className={`relative rounded-lg ${styles.box2}`}>
                      <h1 className='relative text-3xl font-semibold left-5 top-3'>OO - OO<br/>October</h1>
                      <h1 className='absolute text-xl font-semibold text-right bottom-3 right-5'>Semi Final<br/><span className='text-3xl font-bold'>Video Pitching Presentation</span></h1>
                    </div>
                  </div>
                  <div className={`px-1 mr-12 rounded-lg ${styles.background1} py-1 bg-black z-10`}>
                    <div className={`relative rounded-lg w-80 ${styles.box2}`}>
                      <h1 className='relative text-3xl font-semibold left-5 top-3'>OO - OO<br/>November</h1>
                      <h1 className='absolute text-xl font-semibold text-right bottom-3 right-5'>Road to Final<br/><span className='text-3xl font-bold'>Incubation Program</span></h1>
                    </div>
                  </div>
                  <div className={`px-1 mr-12 rounded-lg ${styles.background1} py-1 bg-black z-10`}>
                    <div className={`relative rounded-lg w-80 ${styles.box2}`}>
                      <h1 className='relative text-3xl font-semibold left-5 top-3'>4 December</h1>
                      <h1 className='absolute text-xl font-semibold text-right bottom-3 right-5'>Final<br/><span className='text-3xl font-bold'>Award Ceremony & Gala</span></h1>
                    </div>
                  </div>
                  <div className={styles.horizontal}></div>
                </div>
                <div className='absolute left-0 flex flex-row justify-center w-full -bottom-20'>
                  <UnstyledLink href='#' className={`text-xl font-semibold rounded-lg px-4 py-2 ${styles.fourthBtn}`}>Competition Guideline</UnstyledLink>
                </div>
              </div>
          </article>          
        </section>
        <section id='register' className={styles.fourthSection}>
          <article className='relative flex flex-col justify-between px-0 text-black lg:flex-row lg:items-center lg:h-screen layout'>
            <div className='flex flex-col self-center justify-center py-20 lg:w-1/2 lg:py-0'>
              <div className='flex flex-col self-center justify-center px-0 sm:px-8 lg:px-0 sm:w-full lg:w-3/4 w-80'>
                <h1 className='mb-3 text-lg text-center sm:text-left sm:text-xl'>Elevate your experience by joining the</h1>
                <div className={`self-center lg:self-start ${styles.boxed}`}>
                  <div className='flex gap-3'>
                    <h1 className='text-4xl font-bold sm:text-5xl'>IMPACT</h1>
                    <div className={`${styles.boxDecoration} mt-2 w-full h-7 sm:h-10`}></div>
                  </div>
                  <div className='flex gap-3'>
                    <div className={`${styles.boxDecoration} mt-2 w-full h-7 sm:h-10`}></div>
                    <h1 className='text-4xl font-bold sm:text-5xl'>COMMUNITY</h1>
                  </div>
                </div>
                <p className='mt-5 text-lg leading-7 text-center sm:text-left sm:w-80'>A platform for ITS students who are highly motivated in making an impact.</p>
                <div className='flex justify-center w-full mt-12 lg:justify-start'>
                  <UnstyledLink href='#' className={`${styles.fifthBtn} rounded-lg px-5 py-2`}>Join the Community!</UnstyledLink>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full h-full lg:h-full lg:w-1/2'>
              <div className='flex flex-row h-1/6'>
                <div className="flex justify-center w-1/3 overflow-hidden align-center">
                  <img className='flex-shrink-0 min-w-full min-h-full select-none' src="/hultprize1.png" alt="hultprize1" />
                </div>
                <div className='w-2/3' style={{background: '#790E48'}}></div>
              </div>
              <div className="flex h-1/4">
                <div className='flex justify-center w-1/3 overflow-hidden align-center'>
                  <img src="/what.png" alt="what will you get" className='w-auto h-full px-4 py-8 select-none' />  
                </div>
                <div className='relative flex justify-center w-2/3 overflow-hidden align-center'>
                  <img className='flex-shrink-0 min-w-full min-h-full select-none' src="/hultprize2.png" alt="hultprize 2" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-4 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: 'linear-gradient(270deg, rgba(219, 10, 127, 0) 1.02%, #BF1D76 100%)'}}>
                    <h1 className='text-xs leading-4 sm:text-base'>Network with like-minded<br />individuals</h1>
                  </div>
                </div>
              </div>
              <div className="flex h-1/4">
                <div className="relative flex justify-center w-1/2 overflow-hidden sm:w-2/5 align-center">
                  <img className='flex-shrink-0 min-w-full min-h-full select-none' src="hultprize3.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: '#C11873'}}>
                    <h1 className='text-xs sm:text-md xl:text-base'>Create your dream team through pairing service</h1>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/2 sm:w-3/5 overlow-hidden align-center">
                  <img className='z-0 flex-shrink-0 min-w-full min-h-full select-none' src="hultprize4.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: 'linear-gradient(90deg, rgba(230, 92, 168, 0) 0%, #E65CA8 100%)'}}>
                    <h1 className='text-xs leading-4 text-right sm:text-base'>Get information on<br />Hult Prize at ITS faster</h1>
                  </div>
                </div>
              </div>
              <div className="flex h-1/3">
                <div className="relative flex justify-center w-1/2 overflow-hidden align-center">
                  <img className='flex-shrink-0 min-w-full min-h-full select-none' src="hultprize5.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: 'linear-gradient(269.93deg, rgba(219, 10, 127, 0) 0.09%, #BF1D76 99.96%)'}}>
                    <h1 className='text-xs leading-5 sm:text-base'>Exclusive Q&A session</h1>
                  </div>
                </div>
                <div className="relative flex justify-center w-1/2 overflow-hidden align-center">
                  <img className='flex-shrink-0 min-w-full min-h-full select-none' src="hultprize6.png" alt="hultprize3" />
                  <div className='absolute bottom-0 flex flex-col justify-center w-full h-12 px-3 py-1 font-light tracking-wider text-white sm:h-16 lg:h-12 align-center' style={{background: '#BF1D76'}}>
                    <h1 className='text-xs leading-5 text-right sm:text-base'>Exclusive coaching</h1>
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
                <div>
                  <div className='flex'>
                    <h1 className='text-4xl text-left uppercase'>About<br /></h1>
                    <div className={`${styles.line1}`}></div>
                  </div>
                  <h1 className='text-5xl font-bold text-left uppercase'>HULT PRIZE AT ITS</h1>
                  <p className='text-lg leading-6 md:w-5/6 mt-7'>Hult Prize at ITS is part of the OnCampus Program of Hult Prize where ITS students (of ALL study programs) are given the chance to tackle the world's problems in the form of a startup competition. You will get to ideate your own business for a better world (in accordance to the case given) and receive exclusive training and incubation from professionals to develop it.</p>
                </div>
                <div className='gap-10 mt-7'>
                  <p className='mb-5 text-lg'>Spread the word about Hult Prize at ITS!</p>
                  <div className='flex flex-col gap-6 md:flex-row'>
                    <UnstyledLink href='#' className={`self-start rounded-lg px-5 py-1 ${styles.fifthBtn}`}>Download the video</UnstyledLink>
                    <p className='md:mt-3'>..and share on your Instagram story!</p>
                  </div>
                </div>
              </div>
              <div className='relative w-1/2'></div>
            </div>
          </article>
        </section>
        <div className='flex flex-col w-full h-64' style={{backgroundColor: '#E5E5E5',}}>
          <div className={styles.footer1}>
            <h1 className='text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl lg:text-4xl'>ARE YOU READY TO #CreateTheChange?</h1>
          </div>
          <div className={styles.footer2}>
            <h1 className='text-3xl font-bold text-center md:text-4xl'>Stay Connected!</h1>
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
