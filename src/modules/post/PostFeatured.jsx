import Heading from '../../components/heading/Heading';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles
import { useState } from 'react';

// fire-base
import { db } from '../../firebase-app/firebase-config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect } from 'react';

// component
import PostFeaturedItems from './PostFeaturedItems';
function PostFeatured() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, 'posts');
    const queries = query(
      colRef,
      where('status', '==', 1),
      where('featured', '==', true)
    );

    const unsubscribe = onSnapshot(queries, (snapShot) => {
      const result = [];
      snapShot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(result);
    });

    return () => unsubscribe();
  }, []);

  if (posts.length < 0) return null;

  return (
    <div>
      <Heading>Post Featured</Heading>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map((element, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 gap-4">
              <PostFeaturedItems key={index} data={element}></PostFeaturedItems>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// function PostFeatured() {
//   return (

//   );
// }

export default PostFeatured;
