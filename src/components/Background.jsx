import { useEffect, useRef, useContext } from 'react'
import * as THREE from 'three'
import { DarkThemeContext } from '../context/DarkThemeContext'
import NET from 'vanta/dist/vanta.net.min'

function VantaBackground() {
    const vantaRef = useRef(null)
    const vantaEffect = useRef(null)
    const { isDark } = useContext(DarkThemeContext)

    useEffect(() => {
        // Wait for the ref to be available
        if (!vantaRef.current) return

        // Only create effect if it doesn't exist
        if (!vantaEffect.current) {
            vantaEffect.current = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: isDark === 'dark' ? 0xa04598 : 0xd2639b,  
                backgroundColor: isDark === 'dark' ? 0x0f0f1e : 0xf2efd6,
                points: 20.00,
                maxDistance: 0.00,
                spacing: 15.00
            })
        }

        // Cleanup when component unmounts
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy()
                vantaEffect.current = null
            }
        }
    }, [isDark])

    return (
        <div
            ref={vantaRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}
        />
    )
}

export default VantaBackground