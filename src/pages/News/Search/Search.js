import React from 'react';
import classes from './Search.module.scss';
import classNames from 'classnames';
import del from './delete.svg';

const Search = ({loading, value, onChange, noSearch, deleteHandler}) => {

    const btn = <button 
                    disabled={loading} 
                    className={classNames(classes.Delete)} 
                    style={{'backgroundImage': `url(${del})`}}
                    onClick={deleteHandler}
                ></button>;

    return (
        <div className={classNames(classes.Search, loading ? classes.Loading : null)}>
            <input className={classNames('input')} disabled={loading} type="text" value={value} onChange={onChange} placeholder="Введите поисковый запрос..." />
            {noSearch ? null : btn}
        </div>
    )
}

export default Search;

// , loading ? classes.Loading : null