import type { HTMLAttributes } from 'react'

interface ModelViewerElement extends HTMLAttributes<HTMLElement> {
    src?: string;
    alt?: string;
    'auto-rotate'?: boolean;
    'camera-controls'?: boolean;
    'touch-action'?: string;
    'shadow-intensity'?: string;
    'shadow-softness'?: string;
    exposure?: string;
    'environment-image'?: string;
    loading?: 'auto' | 'lazy' | 'eager';
}

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': ModelViewerElement;
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': ModelViewerElement;
        }
    }
}

interface ModelViewerProps {
    modelUrl: string
    altText?: string
}

export const App = () => {
    const MODEL_PATH: string = '/ball-model-web/ballmodel.glb'

    return (
        <div className='h-screen w-screen overflow-hidden bg-black select-none'>
            <ModelViewer modelUrl={MODEL_PATH} altText='3D модель мяча' />
        </div>
    )
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelUrl, altText = 'Model ball' }) => {
    return (
        <model-viewer
            src={modelUrl}
            alt={altText}
            camera-controls
            auto-rotate
            touch-action='pan-y'
            exposure='0.35'
            tone-mapping='commerce'
            environment-image='legacy'
            shadow-intensity='0.8'
            shadow-softness='1'
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000000',
            }}
        />
    )
}
