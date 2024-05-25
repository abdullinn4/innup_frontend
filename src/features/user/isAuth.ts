import { useSelector } from 'react-redux';
import {RootState} from "../../app/store.ts";

export const useAuth = () => {
    const { user } = useSelector((state: RootState) => state.user);
    return {
        isAdmin: user?.role === 'Admin',
        user,
    };
};
