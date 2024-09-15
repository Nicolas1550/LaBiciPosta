// src/hooks/useTypedSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Hook personalizado para usar el selector con tipado
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
