import React from 'react'
import MySelect from '../UI/select/MySelect'
import MyInput from '../UI/inputs/MyInput'

const PostFilter = function({filter, setFilter}) {
    return (
        <div>
            <p style={{textAlign: 'center'}}>Posts filter:</p>
            <MySelect
            value = {filter.sort}
            onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue = 'Sort'
                options={[
                    {value: 'title', name: 'Name'},
                    {value: 'description', name: 'Description'}
                ]}
            />
            <MyInput
                value = {filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
                placeholder = 'Search posts...'
            />
        </div>
    )
}

export default PostFilter