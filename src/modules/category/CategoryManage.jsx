import React from 'react';

// components
import { Table } from '../../components/table';
import { LabelStatus } from '../../components/label';
import { ActionDelete, ActionView, ActionEdit } from '../../components/actions';
import { useEffect, useState } from 'react';
// fire-base
import { db } from '../../firebase-app/firebase-config';
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  where,
  limit,
} from 'firebase/firestore';

// constant
import { categoriesStatus } from '../../constants/constants';

// Swal
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// react-router-dom
import { useNavigate } from 'react-router-dom';

// lo-dash
import debounce from 'lodash/debounce';
import { useItemCateStore } from '../../stores/cateStore';

const MySwal = withReactContent(Swal);


function CategoryManage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');

  // loadmore
  const [hasMore, setHasMore] = useState(false);
  const limitCount = useItemCateStore((state) => state.count);
  const [total, setTotal] = useState(0);

  const loadMore = useItemCateStore((state) =>state.loadMoreItem);

  useEffect(() => {
    const colRef = collection(db, 'categories');
    const baseQuery = filter
      ? query(
        colRef,
        where('name', '>=', filter),
        where('name', '<=', filter + '\uf8ff'),
        limit(limitCount)
      )
      : query(colRef, limit(limitCount));

    onSnapshot(colRef, (snapShot) => {
      setTotal(snapShot.size);
    });

    const unsubscribe = onSnapshot(baseQuery, (snapshot) => {
      if (snapshot.empty) {
        setMessage('This category is not found, please try again');
        setCategories([]);
        setHasMore(false);
        return;
      } else {
        setMessage('');
      }

      const results = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategories(results);
      setHasMore(snapshot.docs.length === limitCount);
    });

    return () => unsubscribe();
  }, [filter, limitCount]);

  console.log(total);
  console.log("limitCount");
  console.log(limitCount);

  // handle delete DOC
  const handleDelete = async (postID) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#52a38a',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonColor: 'gray',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, 'categories', postID));
        Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
      }
    });
  };

  // handle filter
  const handleFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  const handleLoadmore = () => {

    if (!hasMore) return;

    loadMore();

  };


  return (
    <>
      <div className="flex justify-end">
        <input
          type="text"
          className="mt-6 p-2 w-[300px] bg-gray-200 rounded border-2 border-gray-200 transition duration-200 ease-linear outline-none focus:border-2 focus:border-primary focus:bg-white "
          placeholder="Search here...."
          onChange={handleFilter}
        />
      </div>
      {categories.length == 0 ? (
        message
      ) : (
        <Table>
          <thead className="bg-[#f7f7f8]">
            <tr>
              <th className="p-[20px] text-left">ID</th>
              <th className="p-[20px] text-left">Name</th>
              <th className="p-[20px] text-left">Slug</th>
              <th className="p-[20px] text-left">Status</th>
              <th className="p-[20px] text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 &&
              categories.map((category) => {
                return (
                  <tr key={category.id}>
                    <td className="p-[20px] font-semibold">{category.id}</td>
                    <td className="p-[20px]">{category.name}</td>
                    <td className="p-[20px]">
                      <span className="italic text-gray-400">
                        {category.slug}
                      </span>
                    </td>
                    <td className="p-[20px]">
                      {category.status == categoriesStatus.APPROVED && (
                        <LabelStatus type="success">Approved</LabelStatus>
                      )}
                      {category.status == categoriesStatus.UNAPPROVED && (
                        <LabelStatus type="warning">Unapproved</LabelStatus>
                      )}
                    </td>
                    <td className="p-[20px]">
                      <div className="flex items-center gap-x-2">
                        <ActionView></ActionView>
                        <ActionDelete
                          onClick={() => handleDelete(category.id)}
                        ></ActionDelete>
                        <ActionEdit
                          onClick={() =>
                            navigate(
                              `/dashboard/categories/update?id=${category.id}`
                            )
                          }
                        ></ActionEdit>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
      {total > categories.length && (
        <center>
          <button
            onClick={handleLoadmore}
            className="bg-primary text-white font-bold p-4 rounded-md hover:brightness-90 cursor-pointer"
          >
            Load More
          </button>
        </center>
      )}
    </>
  );
}

export default CategoryManage;
