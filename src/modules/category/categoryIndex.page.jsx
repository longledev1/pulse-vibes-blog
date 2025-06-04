import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useItemCateStore } from '../../stores/cateStore';

function CategoryIndex() {
    const resetLoadMore = useItemCateStore((state) => state.reset);

    useEffect(() => {
        return () => {
            resetLoadMore();
        };
    }, []);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default CategoryIndex;
