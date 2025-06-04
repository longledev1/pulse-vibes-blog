import React, { useState } from 'react';
import { useEffect } from 'react';

// slugify
import slugify from 'slugify';

//  Components
import { Input } from '../../components/Input';
import Radio from '../../components/radio/Radio';
import { Label } from '../../components/label';
import { Field } from '../../components/field';
import { Button } from '../../components/button';
import { Dropdown } from '../../components/dropdown';
import ImageUpload from '../../components/images/ImageUpload';
import Toggle from '../../components/toggle/Toggle';

// react-hook-form
import { useForm } from 'react-hook-form';

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';

// constant
import { postStatus } from '../../constants/constants';

// supabase -> store save image
import useSupabaseImage from '../../hooks/useSupabaseImage';

// fire-base
import { db } from '../../firebase-app/firebase-config';

// auth context
import { useAuth } from '../../context/auth-context';
import { toast } from 'react-toastify';

function PostAddForm() {
  // categories state
  const [categories, setCatagories] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);
  // get userId
  const { userInfo } = useAuth();

  // useForm
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      userId: '',
      image: '',
      title: '',
      slug: '',
      date: '',
      category: {},
      user: {},
      status: postStatus.PENDING, // default status
      featured: false,
    },
  });

  // Change title page
  useEffect(() => {
    document.title = 'Pulse - Add Post';
  }, []);

  // watch status
  const status = watch('status');

  // submit form
  const addPostHandle = async (values) => {
    if (values.slug === '') {
      values.slug = slugify(values.title, { lower: true });
    }
    values.status = +values.status;
    values.image = imageUrl;
    values.userId = userInfo.uid;
    values.date = serverTimestamp();
    console.log(values);

    try {
      const colRef = collection(db, 'posts');
      await addDoc(colRef, {
        ...values,
      });

      toast.success('Create Post sucessfully');
    } catch (error) {
      toast.error('Create Post failed');
      throw new Error(error);
    }
    reset({
      category: {},
      user: {},
      userId: '',
      image: '',
      title: '',
      slug: '',
      status: postStatus.PENDING, // default status
      featured: false,
    });
    setSelectCategory({}); // rest select Category
    setImageUrl(''); // reset Image in <ImageUpload> </ImageUplaod>
  };

  // useSupabaseImage
  const {
    imageUrl,
    setImageUrl,
    isLoadingImage,
    handleSelectImage,
    handleDeleteImage,
  } = useSupabaseImage(setValue);

  // get Categoris from Fira-base

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, 'categories');
      const q = query(colRef, where('status', '==', 1));
      const querySpnapshot = await getDocs(q);
      let result = [];
      querySpnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCatagories(result);
    }
    getData();
  }, []);

  // get User
  useEffect(() => {
    async function GetUserData() {
      if (!userInfo.email) return;
      const colRef = collection(db, 'users');
      const q = query(colRef, where('email', '==', userInfo.email));

      const querySpnapshot = await getDocs(q);
      querySpnapshot.forEach((doc) => {
        setValue('user', {
          ...doc.data(),
        });
      });
    }
    GetUserData();
  }, [userInfo.email]);

  // handle Category
  const handleCategory = async (element) => {
    const colRef = doc(db, 'categories', element.id);

    const docData = await getDoc(colRef);

    setValue('category', {
      id: docData.id,
      ...docData.data(),
    });
    setSelectCategory(element);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addPostHandle)}>
        <Field>
          <Label htmlFor="title">Featured</Label>
          <Toggle name="featured" control={control}></Toggle>
        </Field>
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-10">
          <Field>
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              control={control}
              placeholder="Enter your post title"
            />
          </Field>
          <Field>
            <Label htmlFor="slug">Slug</Label>
            <Input
              name="slug"
              control={control}
              placeholder="Enter your post slug"
            />
          </Field>
          <div className="flex flex-col gap-2">
            <Field>
              <Label>Status</Label>
              <div className="flex items-center gap-x-4">
                <Radio
                  name="status"
                  control={control}
                  checked={+status === postStatus.APPROVED}
                  value={postStatus.APPROVED}
                >
                  Approved
                </Radio>
                <Radio
                  name="status"
                  control={control}
                  checked={+status === postStatus.PENDING}
                  value={postStatus.PENDING}
                >
                  Pending
                </Radio>
                <Radio
                  name="status"
                  control={control}
                  checked={+status === postStatus.REJECT}
                  value={postStatus.REJECT}
                >
                  Reject
                </Radio>
              </div>
            </Field>
            <Field>
              <Label>Categories</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select Category"></Dropdown.Select>
                <Dropdown.List>
                  {categories &&
                    categories.map((element, index) => {
                      return (
                        <Dropdown.Option
                          key={index}
                          onClick={() => handleCategory(element)}
                        >
                          {element.name}
                        </Dropdown.Option>
                      );
                    })}
                </Dropdown.List>
              </Dropdown>
              {selectCategory && selectCategory?.name ? (
                <div className="grid grid-cols-5 gap-2">
                  <span className="inline-blokc p-3 rounded-lg bg-primary text-white  text-center">
                    {selectCategory.name}
                  </span>
                </div>
              ) : (
                ''
              )}
            </Field>
          </div>
          <Field>
            <Label htmlFor="image">Image</Label>
            <ImageUpload
              name="image"
              handleDeleteImage={handleDeleteImage}
              image={imageUrl ? imageUrl : ''}
              onChange={handleSelectImage}
              isLoading={isLoadingImage}
            ></ImageUpload>
          </Field>
        </div>
        <Button
          disabled={isSubmitting}
          isLoading={isSubmitting}
          type="submit"
          className="mt-10 w-full max-w-[300px]"
        >
          <span className="flex items-center justify-center gap-x-2">
            <i className="ri-add-line"></i>
            Add new post
          </span>
        </Button>
      </form>
    </div>
  );
}

export default PostAddForm;
