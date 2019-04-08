import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('TabbedContentItemWidget', {
    title: 'Block',
    attributes: {

        title: {
            title: 'Title',
        },
        text: {
            title: 'Text',
        },
        tags: {
            title: 'Tags',
        },
    },
    properties: [
        'title',
        'text',
        'tags',
    ],

});