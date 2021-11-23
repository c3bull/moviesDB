import React from 'react';

class Header extends React.Component {

    state = {
        likes: 0,
        posts: []
    };

    componentDidMount = () => {
        // this.getBlogPost();
    };



    // displayBlogPost = (posts) => {
    //     if (!posts.length) return null;
    //
    //     return posts.slice(0).reverse().map((post, index) => (
    //         <SinglePost key={post._id.toString()}
    //                     id={post._id}
    //                     author={post.author}
    //                     content={post.content}
    //                     likes={post.likes}
    //                     date={post.date}
    //                     time={post.time}
    //                     likedBy={post.likedBy}
    //         />
    //     ));
    // };

    render() {
        return (
            <div id="mainPageDiv">
                Hello
            </div>
        );
    }
}

export default Header;
