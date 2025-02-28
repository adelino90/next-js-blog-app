import PostHeader from "./post-header";
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import  atomDark   from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
 

SyntaxHighlighter.registerLanguage('js',js);
SyntaxHighlighter.registerLanguage('css',css);
function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
 
  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName && node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            {
              <Image
                src={`/images/posts/${post.slug}/${image.properties.src}`}
                alt={image.alt}
                width={600}
                height={300}
              />
            }
          </div>
        );
      }
      return <p>{props.children}</p>;
    },
    code(code){
      const {language,children} = code;
      return <SyntaxHighlighter style = {atomDark} language = {language} children={children}/>
    }
  };
 
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
 
export default PostContent;