import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}


export const getStaticProps = async () => {
  let posts = []
  try 
  {
    // await the promise
    const querySnapshot = await firebase
      .firestore()
      .collection('categories')
      .get();
  
    // "then" part after the await
    querySnapshot.forEach(function (doc) {
      console.log(doc.data().title)
      console.log(doc.data().pid)
      posts.push({
        title: doc.data().title,
        description: doc.data().description,
      })
    })
    console.log(posts)
  } catch(error) {
      // catch part using try/catch
      console.log('Error getting documents: ', error)
      // return something else here, or an empty props, or throw an exception or whatever 
  }

  return {
      props: {
        posts
      }
  }
}