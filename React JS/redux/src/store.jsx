import { configureStore } from '@reduxjs/toolkit'
import  Counterslice  from './Buttonslice'


export default configureStore  ({
    reducer : {
        counter  : Counterslice
    }
})