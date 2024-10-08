// src/hooks/useTypedDispatch.ts
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

// Hook personalizado para usar el dispatch con tipado
export const useTypedDispatch = () => useDispatch<AppDispatch>();
