import Link from 'next/link'
import { useRouter } from 'next/router'

const Dropdown = () => {
    const router = useRouter()

    return (
        <>
            <ul className='absolute flex flex-col justify-center gap-2 px-2 py-2 bg-white border-2 border-black shadow-xl -right-4 top-6 align-center'>
                {router.locales.map((locale) => {
                    return (
                        <li className='w-full normal-case text-md' key={locale}>
                            <Link href={router.asPath} locale={locale}>
                                <a className='w-full'>
                                    <div className='w-full px-2 py-2 pr-10 text-black duration-200 transform bg-white hover:bg-black hover:text-white'>
                                        {locale === 'in' ? 'Bahasa Indonesia' : 'English'}
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown