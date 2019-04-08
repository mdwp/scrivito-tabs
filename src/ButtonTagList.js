import * as React from 'react';

function ButtonTagList({ showTags, tags, currentTag, setTag }) {
  if (!showTags) { return null; }

  const onClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    setTag(tag);
  };

  return (
    <div className="negative-margin-top nav-centered select-icon">
      <div className="d-none d-sm-block">
        <ul className="nav nav-pills justify-content-center">
          
          {
            tags.map(tag =>
              <li
                role="presentation"
                key={ tag }
                className={ currentTag === tag ? 'active nav-item' : 'nav-item' }
              >
                <a className='nav-link' onClick={ e => onClick(e, tag) } href='#'>{ tag }</a>
              </li>
            )
          }
        </ul>
      </div>
      <select
        onChange={ e => setTag(e.target.value) }
        value={ currentTag }
        className="d-block d-sm-none"
      >
        
        {
          tags.map(tag => <option key={ tag } value={ tag }>{ tag }</option>)
        }
      </select>
    </div>
  );
}

export default ButtonTagList;
