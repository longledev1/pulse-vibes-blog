// component
import { Button } from '../../components/button';
import { Field } from '../../components/field';
import { Label } from '../../components/label';
import { Input } from '../../components/Input';
import Radio from '../../components/radio/Radio';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { categoriesStatus } from '../../constants/constants';
import slugify from 'slugify';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase-app/firebase-config';
import { toast } from 'react-toastify';
function CategoryAddForm() {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      slug: '',
      status: Number(1),
    },
  });

  // Change title page
  useEffect(() => {
    document.title = 'Pulse - Add Category';
  }, []);

  const addCategoryHandle = async (values) => {
    if (values.slug === '') {
      values.slug = slugify(values.name || values.slug, { lower: true });
    }
    values.status = Number(values.status); // convert to number

    try {
      const colRef = collection(db, 'categories');
      await addDoc(colRef, {
        ...values,
        createdAt: serverTimestamp(),
      });
      toast.success('Add new Category successfully');
    } catch (error) {
      throw new Error(error);
    }

    reset({
      name: '',
      slug: '',
      status: Number(1),
    });
  };

  const statusWatch = Number(watch('status'));

  return (
    <div>
      <form onSubmit={handleSubmit(addCategoryHandle)} action="">
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
            Add new Category
          </span>
        </Button>
      </form>
    </div>
  );
}

export default CategoryAddForm;
