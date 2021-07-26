import {
    CREATE_USER,
    RETRIEVE_USERS,
    UPDATE_USER,
    DELETE_USER,

} from "./types";

import UserDataService from "../services/UsersService";

export const createUser = (username, firstName, lastName, email) => async (dispatch) => {
    try {
        const res = await UserDataService.create({ username, firstName, lastName, email });

        dispatch({
            type: CREATE_USER,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveUsers = () => async (dispatch) => {
    try {
        const res = await UserDataService.getAll();

        dispatch({
            type: RETRIEVE_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await UserDataService.update(id, data);

        dispatch({
            type: UPDATE_USER,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await UserDataService.remove(id);

        dispatch({
            type: DELETE_USER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

// export const deleteAllTutorials = () => async (dispatch) => {
//     try {
//         const res = await TutorialDataService.removeAll();
//
//         dispatch({
//             type: DELETE_ALL_TUTORIALS,
//             payload: res.data,
//         });
//
//         return Promise.resolve(res.data);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };

// export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//         const res = await TutorialDataService.findByTitle(title);
//
//         dispatch({
//             type: RETRIEVE_TUTORIALS,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };