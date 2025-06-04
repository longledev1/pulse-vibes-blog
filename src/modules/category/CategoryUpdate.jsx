import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DashboardHeading } from '../../components/dashboard-heading';
import { useForm } from 'react-hook-form';
// component
import { Field } from '../../components/field';
import { Button } from '../../components/button';
import { Label } from '../../components/label';
import { Input } from '../../components/Input';
import Radio from '../../components/radio/Radio';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-app/firebase-config';
import { categoriesStatus } from '../../constants/constants';
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function CategoryUpadate() {
  const navigate = useNavigate();
  const [nameCate, setNameCate] = useState('');

  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {},
  });

  const [params] = useSearchParams();
  const categoryID = params.get('id');

  useEffect(() => {
    async function getCategory() {
      const colRef = doc(db, 'categories', categoryID);
      const cateInfo = await getDoc(colRef);
      setNameCate(cateInfo.data().name);
      reset(cateInfo.data());
    }
    getCategory();
  }, [categoryID, reset]);

  // sumbit form
  const handleEdit = async (values) => {
    const colRef = doc(db, 'categories', categoryID);
    await updateDoc(colRef, {
      name: values.name,
      slug: slugify(values.name || values.slug, { lower: true }),
      status: Number(values.status),
    });
    toast.success('Update category sucessfully');
    navigate('/dashboard/categories');
  };

  const statusWatch = watch('status');

  if (!categoryID) return;
  return (
    <div>
      <DashboardHeading>
        Update Category{' '}
        <span className="text-primary  text-[18px] font-semibold">
          ({nameCate ? nameCate : ''})
        </span>
      </DashboardHeading>
      <form action="" onSubmit={handleSubmit(handleEdit)}>
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-10">
          <Field>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              control={control}
              placeholder="Enter your category name"
            />
          </Field>
          <Field>
            <Label htmlFor="name">Slug</Label>
            <Input
              name="slug"
              control={control}
              placeholder="Enter your category slug"
            />
          </Field>
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-4">
              <Radio
                value={Number(categoriesStatus.APPROVED)}
                checked={statusWatch == categoriesStatus.APPROVED}
                name="status"
                control={control}
              >
                Approved
              </Radio>
              <Radio
                value={Number(categoriesStatus.UNAPPROVED)}
                checked={statusWatch == categoriesStatus.UNAPPROVED}
                name="status"
                control={control}
              >
                Unapproved
              </Radio>
            </div>
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
            Update Category
          </span>
        </Button>{' '}
      </form>
    </div>
  );
}

export default CategoryUpadate;
