import Link from 'next/link'
import { useRouter } from 'next/router'

const Dropdown = () => {
    const router = useRouter()

    return (
        <>
            <ul className='absolute flex flex-col justify-center gap-2 px-2 py-1 pr-10 text-white bg-black border-l-2 border-white border-solid -right-4 top-6 align-center'>
                {router.locales.map((locale) => {
                    return (
                        <li className='normal-case text-md' key={locale}>
                            <Link href={router.asPath} locale={locale}>
                                <a>{locale === 'in' ? 'Bahasa Indonesia' : 'English'}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown