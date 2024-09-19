
import { redirect } from 'next/navigation';

export default function Index() {
  redirect('/aboutme');

  return null; // Returning nothing since we're redirecting

  // const allPosts = getAllPosts();
  //
  // const heroPost = allPosts[0];
  //
  // const morePosts = allPosts.slice(1);

  // return (
    // <main>
    //   <Container>
    //     <Intro />
    //     <HeroPost
    //       title={heroPost.title}
    //       coverImage={heroPost.coverImage}
    //       date={heroPost.date}
    //       author={heroPost.author}
    //       slug={heroPost.slug}
    //       excerpt={heroPost.excerpt}
    //     />
    //     {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    //   </Container>
    // </main>
  // );
}
