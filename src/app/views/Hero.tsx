import { Button } from '@components';
import { LandingStyles } from './views';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id='hero'
            className={LandingStyles.hero}
        >
            <div className={LandingStyles.hero_imagery}>
                <Image
                    src='/images/gradient-texture.jpg'
                    alt='A dynamic abstract background where vibrant orange meets deep navy blue in a smooth gradient. Diagonal stripe patterns run across the canvas, adding movement and energy. The stripes provide contrast to the soft transition of color, giving the image a sense of rhythm and modernity, like bold strokes of paint on a canvas.'
                    width={1000}
                    height={684}
                />
            </div>
            <div className={LandingStyles.hero_textuals}>
                <h1>Verfy</h1>
                <h2>Unleashing the Power of Next.js</h2>
                <p>
                    Experience a dynamic, scalable, and well-structured
                    exploration of Next.js, built to showcase its full potential
                    in real-world applications.
                </p>
                <Button
                    url=''
                    name='GitHub'
                />
            </div>
        </section>
    );
}
