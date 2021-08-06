import React, {Component} from 'react';
import emptyAvatar from "../../images/imgForUsesrs.jpg"
import s from "./Users.module.css";
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                if(response.data.totalCount <= 96){
                    this.props.setUsersCount(response.data.totalCount)}
                this.props.setUsersCount(96)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={s.pageNumber}>
                    {pages.map(el =>
                        <span className={this.props.currentPage === el && s.selectedPage} onClick={(e) => {
                            this.onPageChanged(el);
                        }}>{el}
                    </span>)}
                </div>
                {/*<div className={s.pageNumber}>*/}
                {/*    <span className={s.selectedPage}>1</span>*/}
                {/*    <span>2</span>*/}
                {/*    <span>3</span>*/}
                {/*    <span>4</span>*/}
                {/*    <span>5</span><*/}
                {/*    /div>*/}
                {
                    this.props.users.map(el => <div key={el.id}>
                        <div className={s.usersWrap}>
                            <div className={s.leftColumn}>
                                <img src={el.photos.small != null ? el.photos.small : emptyAvatar} alt="NarutoImg"/>
                                <div>
                                    {el.followed
                                        ? <button onClick={() => {
                                            this.props.unfollow(el.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(el.id)
                                        }}>Follow</button>}
                                </div>
                                <div></div>
                            </div>
                            <div className={s.rightColumn}>
                                <div className={s.fullNameColumn}>
                                    <div>{el.name}</div>
                                    <div></div>
                                    <div>{el.status}</div>
                                </div>
                                <div className={s.countryName}>
                                    <div>"u.location.country"</div>
                                    <div>"u.location.cityName"</div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;