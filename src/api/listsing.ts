import http from '@/utils/http';

export const getAllListingPublic = () => http.get(`notes/fetchallnotesPublic`);
export const getAllUserListing = () => http.get(`notes/fetchallnotes`);
export const getSingleNotes = (noteid: string) => http.get(`notes/getanadd/${noteid}`);
export const deleteAdd = (addid: string) => http.delete(`notes/deletenote/${addid}`);
export const createAdd = (payload: any) => http.post(`notes/addnote`, payload);
export const updateAdd = ({ id, ...payload }: any) => http.put(`notes/updatenote/${id}`, payload);
