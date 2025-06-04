import { useState } from 'react';
import supabase from '../supabase/supabase-config';
import { toast } from 'react-toastify';

function useSupabaseImage(setValue) {
  const [imageUrl, setImageUrl] = useState(''); // save image url
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  // handle upload image
  const handleUploadImage = async (file) => {
    try {
      setIsLoadingImage(true); // when start, set loading state to true

      const fileName = `${Date.now()}_${file.name}`; // create a unique file name

      const { error } = await supabase.storage
        .from('images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        });
      if (error) {
        console.error('Upload error details:', error);
        alert('Upload lỗi: ' + JSON.stringify(error));
        return;
      }

      // destructure the public URL from the response
      const {
        data: { publicUrl },
      } = supabase.storage.from('images').getPublicUrl(fileName);
      setImageUrl(publicUrl);
    } catch (err) {
      console.error('Catch error:', err);
      alert('Có lỗi xảy ra khi tải lên hình ảnh: ' + err.message);
    }
    setIsLoadingImage(false); // when done, set loading state to false
  };

  // handle select image
  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    handleUploadImage(file);
    setValue('image', file);
  };

  // handle delete image
  const handleDeleteImage = async () => {
    if (!imageUrl) return;
    const fileName = imageUrl.split('/').pop();

    const { error } = await supabase.storage.from('images').remove([fileName]);
    if (error) {
      console.error('Delete error:', error);
      alert('Xóa ảnh thất bại: ' + error.message);
      return;
    }
    toast.success('Xóa ảnh thành công');
    setImageUrl('');
    setValue('image', '');
  };

  return {
    imageUrl,
    setImageUrl,
    isLoadingImage,
    handleSelectImage,
    handleDeleteImage,
  };
}

export default useSupabaseImage;
