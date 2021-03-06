import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";

export const Sidebardata = [
    {
        title: 'Strona Główna',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Baza danych',
        path: '/all',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    },
    {
        title: 'Filmy',
        path: '/movies',
        icon: <BiIcons.BiMovie />,
        cName: 'nav-text'
    },
    {
        title: 'Seriale',
        path: '/series',
        icon: <MdIcons.MdMovie />,
        cName: 'nav-text'
    },
    {
        title: 'Dodaj Film!',
        path: '/add',
        icon: <AiIcons.AiFillPlusCircle />,
        cName: 'nav-text'
    },
]
