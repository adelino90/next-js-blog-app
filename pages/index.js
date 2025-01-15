import { Fragment } from "react";
import Hero from "../components/homepage/hero";
import FeaturedPost from "../components/homepage/featured-post";
import { getFeaturedPosts } from "../lib/post-util";
import Head from 'next/head'
function Homepage(props){
   
  
    return (
    <Fragment>
       <Head>
         <title>Welcome to Ding Blog</title>
         <meta name="description" content="I post about programming and web"/>
      </Head>
        <Hero />
        <FeaturedPost posts = {props.posts}/>
    </Fragment>)
}


export function getStaticProps(){
   const featuredPosts = getFeaturedPosts();
   return {
      props: {
         posts: featuredPosts
      },
      revalidate:60
   }
}
export default Homepage;