import { AuthorPost } from '../../components/author-post';
import { TitlePost } from '../../components/title-post';
import { ButtonPost } from '../../components/button-post';
function PostFeaturedItems({ data }) {
  console.log(data.image);

  if (!data || !data.id) return null;
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString('vi-VI');

  const { category, user } = data;
  console.log(user);

  return (
    <div>
      <div
        className="h-64 w-full bg-cover bg-center rounded-lg relative"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="relative w-full h-full group">
          <div className="absolute inset-0 bg-black/75 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity duration-300 z-0 rounded-lg"></div>
          <div className="relative z-10 flex flex-col justify-between h-full cursor-pointer">
            <div className="flex items-center justify-between p-2">
              {category && (
                <ButtonPost to={category.slug} className="text-white">
                  {category.name ? category.name : 'Not Found'}
                </ButtonPost>
              )}
              <AuthorPost
                author={user?.fullname || 'Empty user'}
                date={formatDate}
                color="text-white"
              />
            </div>
            <TitlePost className="p-2 text-white">{data.title}</TitlePost>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostFeaturedItems;
