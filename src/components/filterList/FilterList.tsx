import React, {useMemo, useState} from 'react';
import { names } from "../../data/data";
import classes from "./FilterList.module.scss";
import { IFilterList } from "./FilterList.interfaces";
import {getClassesFromObj} from "../../helpers/getclasses";

 export const FilterList = ({ register = true }:IFilterList) => {
    let [value, setValue] = useState("");
    let cl_root = useMemo(() => getClassesFromObj({
        general: {
            [classes["filter-list"]] : 1,
        },
        theme:{
           [classes["filter-list_theme"]] :1,
        },
        border: {
            [classes["filter-list_border"]] :1,
        },
        size: {
            [classes["filter-list_size"]] :1,
        },

    }),[]);
    let cl_input = useMemo(() => getClassesFromObj({
        general: {
            [classes["filter-list__input"]] :1,
        },
        border: {
            [classes["filter-list__input_border"]] :1,
        }

    }),[]);
    let cl_list_contaner =useMemo(() => getClassesFromObj({
        general: {
            [classes["filter-list__list-contaner"]] :1,
        },
        size: {
            [classes["filter-list__list-contaner_size"]] :1,
        },
    }),[]);
    let cl_list_item = useMemo(() => getClassesFromObj({
        general: {
            [classes["filter-list__list-item"]] :1,
        },
        theme: {
            [classes["filter-list__list-item_theme"]] :1,
        },
        size: {
           [classes["filter-list__list-item_size"]]:1,
        },
        border: {
            [classes["filter-list__list-item_border"]]:1,
        },
    }),[]);
     let onchangeHandler = ({ target :{ value } }:React.ChangeEvent<HTMLInputElement>) => {
         setValue(value);
     };
    return (
        <div className={ cl_root }>
            <input
                className={ cl_input }
                value = { value }
                type ="text"
                onChange={ onchangeHandler }
            />
            <ul className={cl_list_contaner}>
                {
                    names.map((name, index) => {
                       if(!value) {
                           return <li
                               key= {"23fgh"+"ListSort"+ index}
                               className={ cl_list_item }
                           >{ name } </li>
                       } else  {
                           if(!register && name.startsWith(value)) {
                               return <li
                                   key= {"23fgh"+"ListSort"+ index }
                                   className={ cl_list_item }
                               > { name }</li>
                           } else if(register && name.toLowerCase().startsWith(value.toLowerCase())) {
                               return <li
                                   key= {"23fgh"+"ListSort"+ index }
                                   className={ cl_list_item }
                               > { name }</li>
                           }  else {
                               return  null;
                           }
                       }
                   })
                }
            </ul>
        </div>
    );
};
