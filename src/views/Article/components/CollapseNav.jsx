import React from 'react';
import { Dropdown } from 'antd';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: '#0094ff',
    borderBottom: '2px solid #0094ff'
}

const items = [
    {
        key: '/article',
        label: <NavLink to='/article' style={({ isActive }) => isActive ? activeStyle : undefined}>首页</NavLink>,
    },
    {
        key: '/article/studying',
        label: <NavLink to='/article/studying' style={({ isActive }) => isActive ? activeStyle : undefined}>学习</NavLink>,
    },
    {
        key: '/article/life',
        label: <NavLink to='/article/life' style={({ isActive }) => isActive ? activeStyle : undefined}>生活</NavLink>,
    },
    {
        key: '/article/coding',
        label: <NavLink to='/article/coding' style={({ isActive }) => isActive ? activeStyle : undefined}>Coding</NavLink>,
    },
    {
        key: '/article/clothes',
        label: <NavLink to='/article/clothes' style={({ isActive }) => isActive ? activeStyle : undefined}>服饰</NavLink>,
    },
    {
        key: '/article/foods',
        label: <NavLink to='/article/foods' style={({ isActive }) => isActive ? activeStyle : undefined}>美食</NavLink>,
    }
]

export default function CollapseNav() {
    return (
        <Dropdown
            menu={{ items }}
            placement="bottom"
            selectable={true}
            defaultSelectedKeys={['/article']}
            destroyPopupOnHide={true}
            trigger="click"
        >
            <i className="iconfont icon-icon-zhedie"></i>
        </Dropdown>
    )
}
