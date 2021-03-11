import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '25vw',
            }}
        >
            <Head>
                <title>🚲 bloody average 🚲</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.div
                initial={{ x: '-25vw', y: '10v' }}
                animate={{ x: '10vw', y: '-25vh' }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 10,
                }}
                style={{
                    position: 'absolute',
                    top: '-25vw',
                    left: '-25vh',
                    width: '150vw',
                    height: '150vh',
                    backgroundImage:
                        'radial-gradient(circle at 28% 68%, hsl(317.23,100%,81.57%) 0%, hsl(60,100%,96.08%) 57%)',
                    zIndex: -1,
                }}
            />
            <div>Bloody</div>
            <div>Average</div>
            <div
                style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '2rem',
                }}
            >
                🚲
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    fontSize: '2rem',
                }}
            >
                ⛳️
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontSize: '2rem',
                }}
            >
                🍺
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    fontSize: '2rem',
                }}
            >
                🍑
            </div>
        </div>
    )
}
