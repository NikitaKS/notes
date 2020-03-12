import axios from 'axios'
import {IComment, INote} from "../helpers/types";

const instance = axios.create({
    baseURL: 'https://notes-test-8b3be.firebaseio.com/',
});

interface IResponse {
    name: string
    error: string
}

export const apiNotes = {
    async getNotes() {
        return await instance.get<INote[]>('notes.json')
            .then((res) => {
                if (res.data) {
                    return Object.keys(res.data).map((key: any) => {
                        return {...res.data[key], noteKey: key};
                    });
                } else {
                    return []
                }

            })
    },
    async getComments() {
        return await instance.get<IComment[]>(`comments.json`)
            .then((res) => {
                if (res.data) {
                    return Object.keys(res.data).map((key: any) => {
                        return {...res.data[key], commentKey: key};
                    });
                } else {
                    return []
                }
            })
    },
    async addNewNote(newNote: INote) {
        return await instance.post<IResponse>(`notes.json`, newNote).then((res) => {
            return res.data;
        });
    },
    async addNewComment(newComment: IComment) {
        return await instance.post<IResponse>(`comments.json`, newComment).then((res) => {
            return res.data;
        });
    },
    async deleteNote(noteKey: string) {
        return await instance.delete<IResponse>(`notes/${noteKey}.json`).then(res => {
            return res.data
        })
    },
    async changeNote(changedNote: INote) {
        return await instance.put<IResponse>(`notes/${changedNote.noteKey}.json`, changedNote).then(res => {
            return res.data
        })
    }
};
