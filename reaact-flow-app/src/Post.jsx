import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

function Post({title,body}){
    return(
        <>
        <PostBody body ={body} />
        <PostTitle title={title} />
        </>
    )
}
export default Post;