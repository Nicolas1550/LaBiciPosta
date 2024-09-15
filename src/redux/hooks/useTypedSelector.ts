// src/hooks/useTypedSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

// Hook personalizado para usar el selector con tipado
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
