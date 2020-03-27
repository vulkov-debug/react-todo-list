import React, { Component } from 'react'
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
               <section>
                   <h2>todo list</h2>
                   <Item/>
               </section>
            </div>
        )
    }
}
