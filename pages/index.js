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
                <title>🚲 Bloody Average ⛳️</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.div
                initial={{ x: -80, y: -120 }}
                animate={{ x: 50, y: 85 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 15,
                }}
                style={{
                    position: 'absolute',
                    top: -80,
                    left: -120,
                    width: 'calc(100vw + 200px)',
                    height: 'calc(100vh + 300px)',
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
