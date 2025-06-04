import { create } from 'zustand';

const PAGE_SIZE = 3;
const useItemCateStore = create((set) => ({
    
    count: PAGE_SIZE,

    loadMoreItem: () => {
        set((state) => (
            { count: state.count + PAGE_SIZE }
        ))
    },

    reset: () => set({ count: PAGE_SIZE }),
}));

export { useItemCateStore };