import { create } from 'zustand';

interface IRegisterModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useRegisterModal = create<IRegisterModal>(set => ({
  isOpen: false,
  openModal: () => set(() => ({ isOpen: true })),
  closeModal: () => set(() => ({ isOpen: false })),
}));

export default useRegisterModal;
