import {
    REGISTER_PERSONALDATA_REQUEST,
    REGISTER_PERSONALDATA_SUCCESS,
    REGISTER_PERSONALDATA_FAIL,
    CLEAR_ERRORS,
    GET_PERSONALDATA_REQUEST,
    GET_PERSONALDATA_SUCCESS,
    GET_PERSONALDATA_FAIL,
    REGISTER_ADDRESS_SUCCESS,
    REGISTER_ADDRESS_REQUEST,
    REGISTER_ADDRESS_FAIL,
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAIL,
    REGISTER_EDUCATION_REQUEST,
    REGISTER_EDUCATION_SUCCESS,
    REGISTER_EDUCATION_FAIL,
    GET_EDUCATION_REQUEST,
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAIL,
    REGISTER_EDUCATION_RESET,
    REGISTER_ADDRESS_RESET,
    REGISTER_PERSONALDATA_RESET,
    APPLY_ADMISSION_SUCCESS,
    APPLY_ADMISSION_REQUEST,
    APPLY_ADMISSION_RESET,
    APPLY_ADMISSION_FAIL,
    MY_APPLICATION_REQUEST,
    MY_APPLICATION_SUCCESS,
    MY_APPLICATION_FAIL,
    COURSE_APPLICATION_REQUEST,
    COURSE_APPLICATION_SUCCESS,
    COURSE_APPLICATION_FAIL,
    APPLICATION_UPDATE_REQUEST,
    APPLICATION_UPDATE_SUCCESS,
    APPLICATION_UPDATE_FAIL,
    APPLICATION_UPDATE_RESET,
    GET_APPLICATION_REQUEST,
    GET_APPLICATION_SUCCESS,
    GET_APPLICATION_FAIL,
    SELECTED_APPLICATION_REQUEST,
    SELECTED_APPLICATION_SUCCESS,
    SELECTED_APPLICATION_FAIL,
    CONFIRMED_APPLICATION_REQUEST,
    CONFIRMED_APPLICATION_SUCCESS,
    CONFIRMED_APPLICATION_FAIL,
    REGISTER_FILES_SUCCESS,
    REGISTER_FILES_REQUEST,
    REGISTER_FILES_RESET,
    REGISTER_FILES_FAIL,
    GET_FILES_REQUEST,
    GET_FILES_SUCCESS,
    GET_FILES_FAIL,
} from "../constants/applyConstants";

export const applyFormReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_PERSONALDATA_REQUEST:
            return {
                // ...state,
                loading: true
            }

        case REGISTER_PERSONALDATA_SUCCESS:

            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }

        case REGISTER_PERSONALDATA_RESET:

            return {
                // ...state,
                loading: false,

            }

        case REGISTER_PERSONALDATA_FAIL:

            return {
                // ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}


export const applyFormAddressReducer = (state = {}, action) => {
    switch (action.type) {

        case REGISTER_ADDRESS_REQUEST:

            return {
                // ...state,
                loading: true
            }


        case REGISTER_ADDRESS_SUCCESS:

            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }

        case REGISTER_ADDRESS_RESET:

            return {
                // ...state,
                loading: false,

            }

        case REGISTER_ADDRESS_FAIL:

            return {
                // ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}


//file upload 
export const appyFormfileReducer = (state = {}, action) => {
    switch (action.type) {

        case REGISTER_FILES_REQUEST:

            return {
                ...state,
                loading: true
            }


        case REGISTER_FILES_SUCCESS:

            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }

        case REGISTER_FILES_RESET:

            return {
                // ...state,
                loading: false,

            }

        case REGISTER_FILES_FAIL:

            return {
                // ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}


//GET FILESS

// export const GetFormfileReducer = (state = {}, action) => {
//     switch (action.type) {

//         case GET_FILES_REQUEST:

//             return {
//                 // ...state,
//                 loading: true
//             }


//         case GET_FILES_SUCCESS:

//             return {
//                 // ...state,
//                 loading: false,
//                 message: action.payload.message
//             }

//             case REGISTER_FILES_RESET:

//             return {
//                 // ...state,
//                 loading: false,

//             }

//         case REGISTER_FILES_FAIL:

//             return {
//                 // ...state,
//                 loading: false,
//                 error: action.payload
//             }

//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null
//             }
//         default:
//             return state;
//     }
// }
// education 

export const applyFormEducationReducer = (state = {}, action) => {
    switch (action.type) {

        case REGISTER_EDUCATION_REQUEST:
            return {
                // ...state,
                loading: true
            }


        case REGISTER_EDUCATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                message: action.payload.message
            }
        case REGISTER_EDUCATION_RESET:

            return {
                // ...state,
                loading: false,

            }
        case REGISTER_EDUCATION_FAIL:
            return {
                // ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}



//apply admission

export const applyAdmissionReducer = (state = {}, action) => {
    switch (action.type) {

        case APPLY_ADMISSION_REQUEST:
            return {
                // ...state,
                loading: true
            }


        case APPLY_ADMISSION_SUCCESS:
            return {
                // ...state,
                loading: false,
                msg: action.payload.msg
            }
        case APPLY_ADMISSION_RESET:

            return {
                // ...state,
                loading: false,

            }
        case APPLY_ADMISSION_FAIL:
            return {
                // ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

//get student personal details

export const studentDetailsReducer = (state = { studentsFiles: {}, studentPersonalData: {}, studentAddress: {}, studentEducation: {} }, action) => {
    switch (action.type) {
        case GET_PERSONALDATA_REQUEST:
        case GET_ADDRESS_REQUEST:
        case GET_EDUCATION_REQUEST:
        case GET_FILES_REQUEST:
            return {
                ...state,
                loading: true,
                studentPersonalData: {},
                studentAddress: {},
                studentEducation: {},
                studentsFiles: {}

            }

        case GET_PERSONALDATA_SUCCESS:
            return {
                ...state,
                loading: false,
                studentPersonalData: action.payload.studentPersonalData
            }
        case GET_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                studentAddress: action.payload.studentAddress
            }
        case GET_EDUCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                studentEducation: action.payload.studentEducation
            }
        case GET_FILES_SUCCESS:
            return {
                ...state,
                loading: false,
                studentsFiles: action.payload.studentsFiles
            }
        case GET_FILES_FAIL:
        case GET_PERSONALDATA_FAIL:
        case GET_ADDRESS_FAIL:
        case GET_EDUCATION_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

//get  applications for user

export const MyApplicationReducer = (state = { applications: []}, action) => {
    switch (action.type) {

        case MY_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true
            }


        case MY_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                applications: action.payload.applications,
              
            }

        case MY_APPLICATION_FAIL:
            return {
                // ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}


//GET COURSE APPLICATIONS

export const CourseApplicationReducer = (state = { course_applications: [] }, action) => {
    switch (action.type) {

        case COURSE_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true
            }



        case COURSE_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                course_applications: action.payload.course_applications
            }

        case COURSE_APPLICATION_FAIL:
            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

//get application details

export const applicationDetailsReducer = (state = { application: {} ,payment_history:[] }, action) => {
    switch (action.type) {

        case GET_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true
            }


        case GET_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                application: action.payload.application,
                payment_history: action.payload.payment_history
            }

        case GET_APPLICATION_FAIL:
            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

//update application status

export const ApplicationReducer = (state = {}, action) => {
    switch (action.type) {

        case APPLICATION_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }


        case APPLICATION_UPDATE_SUCCESS:
            return {
                // ...state,
                loading: false,
                isUpdated: true,
                message: action.payload.message
            }
        case APPLICATION_UPDATE_RESET:
            return {
                // ...state,
                loading: false,
                isUpdated: false
            }

        case APPLICATION_UPDATE_FAIL:
            return {

                loading: false,
                error: action.payload,
                isUpdated: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
//get selected applications

export const SelectedApplicationReducer = (state = { SelectedApplication: [] }, action) => {
    switch (action.type) {

        case SELECTED_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true
            }


        case SELECTED_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                SelectedApplication: action.payload.SelectedApplication
            }

        case SELECTED_APPLICATION_FAIL:
            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

//get selected applications

export const ConfirmStudentReducer = (state = { ConfirmStudent: [] }, action) => {
    switch (action.type) {

        case CONFIRMED_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true
            }


        case CONFIRMED_APPLICATION_SUCCESS:
            return {
                // ...state,
                loading: false,
                ConfirmStudent: action.payload.ConfirmStudent
            }

        case CONFIRMED_APPLICATION_FAIL:
            return {

                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
