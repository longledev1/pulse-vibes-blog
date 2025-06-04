import { Fragment } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
function ImageUpload(props) {
  const {
    name,
    className = '',
    image = '',
    handleDeleteImage = () => {},
    isLoading = false,
    ...rest
  } = props;
  return (
    <label
      className={`cursor-pointer flex items-center justify-center bg-gray-100  w-full min-h-[250px] rounded-lg ${className} relative overflow-hidden`}
    >
      <input
        type="file"
        name={name}
        className="sr-only"
        onChange={() => {}}
        {...rest}
      />
      {!image && (
        <div className="flex flex-col justify-center items-center text-center pointer-events-none">
          {isLoading ? (
            <AiOutlineLoading
              className={`absolute text-8xl text-primary animate-spin ${
                isLoading ? 'block' : 'hidden'
              }`}
            />
          ) : (
            <div>
              <img
                src="/images/img-upload.png"
                alt="upload-img"
                className="max-w-[200px] mb-5"
              />
              <p className="font-semibold">Choose photo</p>
            </div>
          )}
        </div>
      )}
      {image && (
        <Fragment>
          <img
            src={image}
            alt="upload-img"
            className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none"
          />
          <button
            className="absolute top-3 right-3 bg-white p-2 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
            onClick={handleDeleteImage}
          ></button>
        </Fragment>
      )}
    </label>
  );
}

export default ImageUpload;
