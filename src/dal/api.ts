import axios from 'axios'
import {INote} from "../helpers/types";

const instance = axios.create({
    baseURL: 'https://notes-test-8b3be.firebaseio.com/',
});

interface IResponse {
    data: INote | null
    resultCode: number
    message: string
}

export const apiNotes = {
    async getNotes() {
        return await instance.get<INote[]>('notes.json')
            .then((res) => {
                return Object.keys(res.data).map((key: any) => {
                    return res.data[key];
                });
            })
    },
    async addNewNote(newNote: INote) {
        try {
            return await instance.post<IResponse>(`notes/.json`, newNote).then((res) => {
                return {resultCode: 0, message: '', data: newNote}
            })
        } catch (e) {
            return {resultCode: 1, message: 'Some Error', data: null};
        }
    },
    async deleteNote(id: number) {
        try {
            return await instance.delete<IResponse>('notes/-M2AoV8hl9sjmWF53Jyn.json').then((res) => {
                return {resultCode: 0, message: '', data: null}
            })
        } catch (e) {
            return {resultCode: 1, message: 'Some Error', data: null};
        }
    }
};
