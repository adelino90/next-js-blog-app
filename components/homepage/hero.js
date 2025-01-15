import classes from './hero.module.css'
import Image from 'next/image';
function Hero(){


    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/ding.png' alt='An Image Showing Ding' height={500} width={500}/>
            </div>
            <h1>Hi, I'm Ding</h1>
            <p>Blog About Travel - Especially for Travel Blogs</p>
        </section>
    );
}
export default Hero;