import { useRef, useState, type HTMLAttributes, type RefObject } from 'react'

interface ModelViewerElement extends HTMLAttributes<HTMLElement> {
    src?: string
    alt?: string
    'auto-rotate'?: boolean
    'camera-controls'?: boolean
    'touch-action'?: string
    'shadow-intensity'?: string
    'shadow-softness'?: string
    exposure?: string
    'environment-image'?: string
    loading?: 'auto' | 'lazy' | 'eager'
    ref?: RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void)
}

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': ModelViewerElement
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': ModelViewerElement
        }
    }
}

export const App = () => {
    const modelPath: string = `${import.meta.env.BASE_URL}ballmodel.glb`
    const [isInteracting, setIsInteracting] = useState(false)

    const modelViewerRef = useRef<any>(null)

    const handleDefaultCamera = () => {
        if (modelViewerRef.current) {
            modelViewerRef.current.cameraTarget = 'auto auto auto'
        }
    }

    return (
        <div className='relative h-dvh w-vw overflow-hidden bg-black select-none'>

            <model-viewer
                ref={modelViewerRef}
                src={modelPath}
                alt={'3d model ball'}
                camera-controls
                auto-rotate
                touch-action='pan-y'
                exposure='0.35'
                tone-mapping='commerce'
                environment-image='legacy'
                shadow-intensity='0.8'
                shadow-softness='1'

                onMouseDown={() => {
                    setIsInteracting(true)
                    handleDefaultCamera()
                }}
                onMouseUp={() => setIsInteracting(false)}
                onTouchStart={() => {
                    setIsInteracting(true)
                    handleDefaultCamera()
                }}
                onTouchEnd={() => setIsInteracting(false)}

                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000000',
                }}
            >
                <div
                    slot="poster"
                    className="w-full h-full flex items-center justify-center bg-black text-neutral-400 text-sm font-light tracking-wider animate-pulse"
                >
                    loading...
                </div>
            </model-viewer>

            <footer
                className={`absolute bottom-3 left-0 w-full flex justify-center items-center pointer-events-none transition-opacity duration-300 ${isInteracting ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <p className="text-sm font-light text-neutral-400 tracking-wider drop-shadow-md">
                    mikesmth {new Date().getFullYear()}
                </p>
            </footer>

        </div>
    )
}
