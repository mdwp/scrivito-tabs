import * as React from 'react';
import * as Scrivito from 'scrivito';
import ButtonTagList from './ButtonTagList';
import ReactMarkdown  from 'react-markdown';


class TabbedContentComponent extends React.Component {

  constructor(props) {
    super(props);
    const widget = this.props.widget;
    const items = widget.get('items');
    let tags = allTags(items);
    this.state = {
      currentTag: tags[0],
    };


    this.setTag = this.setTag.bind(this);
  }



  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }

  render() {
    const widget = this.props.widget;
    const items = widget.get('items');

    /*if (!items.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Add content in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }*/

    return (
      <div>
        <ButtonTagList
          showTags={ true }
          tags={ allTags(items) }
          currentTag={ this.state.currentTag }
          setTag={ this.setTag }
        />
        <div>
          <div className="row">
            {
              items.map((item) =>
                <TabbedContent
                  key={ item.id() }
                  widget={ item }

                  currentTag={ this.state.currentTag }
                />)
            }
          </div>

        </div>
      </div>
    );
  }
}

Scrivito.provideComponent('TabbedContentWidget', TabbedContentComponent);

const TabbedContent = Scrivito.connect(({ widget, currentTag }) => {

  const text = widget.get('text');
  const title = widget.get('title');
  const tags = widget.get('tags');
  console.log('title',title)
  const classNames = ['col-12', 'text-center', 'squeezed'];
  if (currentTag && !tags.includes(currentTag)) { classNames.pop('squeezed'); }

  return (
    <div className={ classNames.join(' ') }>
          {title.length > 0 && <h2 className="title h3">{ title }</h2>}
          <ReactMarkdown source={text}></ReactMarkdown>
    </div>
  );
});

function allTags(items) {
  const tagsArray = items.map(item => item.get('tags'));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags;
}


