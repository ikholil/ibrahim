import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='min-h-[85vh] container flex justify-center items-center'>
            <div className='flex flex-col items-center gap-4 text-center'>
                <h3>Page Not Found!</h3>
                <Link href="/" className='hover:underline'>Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;