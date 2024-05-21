import React from "react";
import {updateLikeStatus} from "../service";

export const handleLikeClick = async (
    startupId: string,
    liked: boolean,
    setLiked: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setLiked(!liked);
    try{
        await updateLikeStatus(startupId,!liked);
    }catch (error) {
        console.error('Error updating like status:', error);
    }
};