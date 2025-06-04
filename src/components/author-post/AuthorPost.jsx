function AuthorPost({ author, date, color = 'text-black' }) {
  return (
    <div className="flex items-center gap-x-5">
      <span className={color}>{author}</span>
      <span className={color}>{date}</span>
    </div>
  );
}

export default AuthorPost;
