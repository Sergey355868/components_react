import React, { useCallback, useRef, useState } from 'react';
import classes from "./ListSort.module.scss";
import { IlistSort, Iflags_change } from './ListSort.intefaces';
import  { useSortArray } from "../../customshooks/useSortArray";
import { ButtonAnimate } from "../buttonAnimate/ButtonAnimate";

export const ListSort =({ array = [] }:IlistSort<string>) => {
    let [cities, setCities] = useState(array);
    let { current } = useRef<Iflags_change>({
        asc: false,
        desc: false,
    });
    let [asc, desc ] = useSortArray(array);
    let changeFlagDisabled = useCallback((obj:Iflags_change,):void => {
        let flags = Object.entries(obj);
        for(let [key, value] of flags) {
            current[key] = value;
        }
    },[current]);

    let clickHandlerAsc = useCallback( () => {
        setCities(asc);
        changeFlagDisabled({
            asc:true,
            desc:false,
        });
    },[asc, changeFlagDisabled]);
    let clickHandlerDesc = useCallback( () => {
        setCities(desc);
        changeFlagDisabled({
            asc:false,
            desc:true,
        });
    },[desc,changeFlagDisabled]);
    return (
        <div className = { classes.contaner}>
             <ButtonAnimate
                 text ="По убыванию"
                 direction_arrow ="down"
                 animate_shadow = { true }
                 animate_arrow = { true }
                 _classes = { classes.contaner__button }
                 onClick =  { clickHandlerAsc }
                 disabled = {current.asc }
             />
            <ButtonAnimate
                text =" По возрастанию"
                direction_arrow ="up"
                animate_shadow = { true }
                animate_arrow = { true }
                onClick = { clickHandlerDesc }
                disabled = { current.desc}
            />
            <ul className = { classes["list-sort"] }>
                {
                    cities.map((city, index) => {
                        return <li key = { "1010XCV"+ index } className={classes["list-sort__item"]}>{ city }</li>
                    })
                }
            </ul>
        </div>
    );
};

