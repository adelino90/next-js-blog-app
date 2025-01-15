import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/post-util"
import Head from 'next/head'
import { Fragment } from "react";
function AllPostpage (props){
      
    return <Fragment>
         <Head>
               <title>All Post</title>
               <meta name="description" content="All Posts"/>
         </Head>
         <AllPosts posts={props.posts}/>
         </Fragment>
}


export function getStaticProps(){
   const allPosts = getAllPosts();
   return {
      props: {
         posts: allPosts
      }
   }
}
export default AllPostpage